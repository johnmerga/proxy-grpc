import {
  Controller,
  Get,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ApiKeyGuard } from 'src/guards/api-key.guard';
import { ZodValidationService } from 'src/validators/validator';
// import { GrpcClientService } from 'src/grpc/grpc-client.service';
import { GetUserExportDataResponseSchema } from 'src/schemas/proxy.schemas';
import { ProxyResponseDto } from './dto/proxy.dto';

@ApiTags('proxy')
@Controller('proxy')
@UseGuards(ApiKeyGuard)
@ApiSecurity('api-key')
export class ProxyController {
  constructor(
    private readonly zodValidationService: ZodValidationService,
    // private readonly grpcClientService: GrpcClientService,
  ) {}

  @Get('user-export-data')
  @ApiOperation({
    summary: 'Get user export data via gRPC proxy',
    description:
      'Proxies the request to gRPC service and returns user export data',
  })
  @ApiResponse({
    status: 200,
    description: 'User export data retrieved successfully',
    type: ProxyResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing API key',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - gRPC service unavailable',
  })
  getUserExportData(): Observable<any> {
    // returning fake data for demonstration purposes
    return Observable.create((observer) => {
      const fakeResponse = {
        success: true,
        message: 'User export data retrieved successfully',
        data: {
          success: true,
          data: 'User export data here...',
        },
        timestamp: new Date().toISOString(),
      };

      observer.next(fakeResponse);
      observer.complete();
    });
    // return this.grpcClientService.getUserExportData().pipe(
    //   map((grpcResponse) => {
    //     // Validate the gRPC response using Zod
    //     const validatedResponse = this.zodValidationService.validate(
    //       GetUserExportDataResponseSchema,
    //       grpcResponse,
    //     );
    //
    //     return {
    //       success: true,
    //       message: 'User export data retrieved successfully',
    //       data: validatedResponse,
    //       timestamp: new Date().toISOString(),
    //     };
    //   }),
    //   catchError((error) => {
    //     console.error('Proxy Error:', error);
    //
    //     throw new HttpException(
    //       {
    //         success: false,
    //         message: 'Failed to retrieve user export data',
    //         error: 'gRPC service unavailable',
    //         timestamp: new Date().toISOString(),
    //       },
    //       HttpStatus.INTERNAL_SERVER_ERROR,
    //     );
    //   }),
    // );
  }
}
