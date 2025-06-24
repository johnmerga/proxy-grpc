import {
  Controller,
  Get,
  UseGuards,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiKeyGuard } from '../guards/api-key.guard';
import { ZodValidationService } from '../validators/validator';
import { ProxyService } from './proxy.service';
import { GetUserExportDataResponseSchema } from '../schemas/proxy.schemas';
import { ProxyResponseDto } from './dto/proxy.dto';

@ApiTags('proxy')
@Controller('proxy')
// @UseGuards(ApiKeyGuard)
@ApiSecurity('api-key')
export class ProxyController {
  constructor(
    private readonly zodValidationService: ZodValidationService,
    private readonly proxyService: ProxyService,
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
  getUserExportData(): Observable<ProxyResponseDto> {
    return this.proxyService.getUserExportData().pipe(
      map((grpcResponse) => {
        const validatedResponse = this.zodValidationService.validate(
          GetUserExportDataResponseSchema,
          grpcResponse,
        );

        return {
          success: true,
          message: 'User export data retrieved successfully',
          data: validatedResponse,
          timestamp: new Date().toISOString(),
        };
      }),
      catchError((error) => {
        this.logger.error('Proxy Error:', error);

        throw new HttpException(
          {
            success: false,
            message: 'Failed to retrieve user export data',
            error: error.message || 'gRPC service unavailable',
            timestamp: new Date().toISOString(),
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }),
    );
  }

  private readonly logger = new Logger(ProxyController.name);
}
