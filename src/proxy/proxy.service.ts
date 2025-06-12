import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as grpc from '@grpc/grpc-js';
import { GrpcClientService } from 'src/grpc/grpc-client.service';
import { GetUserExportDataRequest } from '../proto/generated/poker/GetUserExportDataRequest';
import { GetUserExportDataResponse } from '../proto/generated/poker/GetUserExportDataResponse';

@Injectable()
export class ProxyService {
  private readonly logger = new Logger(ProxyService.name);

  constructor(private readonly grpcClientService: GrpcClientService) {}

  getUserExportData(
    request: GetUserExportDataRequest = {},
  ): Observable<GetUserExportDataResponse> {
    return new Observable<GetUserExportDataResponse>((observer) => {
      this.logger.log('Making gRPC call to getUserExportData');

      const client = this.grpcClientService.getClient();

      client.getUserExportData(
        request,
        (
          error: grpc.ServiceError | null,
          response?: GetUserExportDataResponse,
        ) => {
          if (error) {
            this.logger.error(
              `Error calling getUserExportData: ${error.message}`,
            );
            observer.error(error);
          } else if (response) {
            this.logger.log(`gRPC call successful: ${response.data}`);
            observer.next(response);
            observer.complete();
          }
        },
      );
    });
  }
}
