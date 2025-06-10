import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiParam,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ApiKeyGuard } from '../guards/api-key.guard';
import { ZodValidationService } from 'src/validators/validator';
import { GrpcClientService } from '../grpc/grpc-client.service';
import { CreateUserDto, UserResponseDto } from '../dto/user.dto';

@ApiTags('users')
@Controller('users')
@UseGuards(ApiKeyGuard)
@ApiSecurity('api-key')
export class UserController {
  constructor(
    private readonly zodValidationService: ZodValidationService,
    private readonly grpcClientService: GrpcClientService,
  ) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find user by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'User found successfully',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid API key' })
  @ApiResponse({ status: 400, description: 'Bad Request - Invalid ID' })
  findUser(@Param('id', ParseIntPipe) id: number): Observable<any> {
    // Validate the ID using Zod
    const validatedData = this.zodValidationService.validate(FindUserSchema, {
      id,
    });

    // Make gRPC call
    return this.grpcClientService.findUser(validatedData.id).pipe(
      map((response) => ({
        success: true,
        data: response,
        message: 'User retrieved successfully',
      })),
      catchError((error) => {
        console.error('gRPC Error:', error);
        return throwError(() => ({
          success: false,
          message: 'Failed to retrieve user',
          error: error.message,
        }));
      }),
    );
  }

  @Post()
  @ApiOperation({ summary: 'Create new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid API key' })
  @ApiResponse({ status: 400, description: 'Bad Request - Validation failed' })
  createUser(@Body() createUserDto: CreateUserDto): Observable<any> {
    const validatedData = this.zodValidationService.validate(
      CreateUserSchema,
      createUserDto,
    );

    // Make gRPC call
    return this.grpcClientService
      .createUser(validatedData.name, validatedData.email)
      .pipe(
        map((response) => ({
          success: true,
          data: response,
          message: 'User created successfully',
        })),
        catchError((error) => {
          console.error('gRPC Error:', error);
          return throwError(() => ({
            success: false,
            message: 'Failed to create user',
            error: error.message,
          }));
        }),
      );
  }
}
