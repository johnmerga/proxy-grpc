// // src/grpc/grpc-client.service.ts
// import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
// import { Observable, throwError } from 'rxjs';
// import { catchError, timeout } from 'rxjs/operators';
// import * as grpc from '@grpc/grpc-js';
// import * as protoLoader from '@grpc/proto-loader';
// import { join } from 'path';
//
// interface GetUserExportDataResponse {
//   success: boolean;
//   data: string;
// }
//
// @Injectable()
// export class GrpcClientService implements OnModuleInit {
//   private readonly logger = new Logger(GrpcClientService.name);
//   private client: any;
//   private packageDefinition: any;
//
//   async onModuleInit() {
//     await this.initializeClient();
//   }
//
//   private async initializeClient(): Promise<void> {
//     try {
//       const PROTO_PATH = join(process.cwd(), 'src/proto/proxy.proto');
//       this.logger.log(`Loading gRPC proto file from: ${PROTO_PATH}`);
//
//       // Load the proto file
//       this.packageDefinition = protoLoader.loadSync(PROTO_PATH, {
//         keepCase: true,
//         longs: String,
//         enums: String,
//         defaults: true,
//         oneofs: true,
//       });
//
//       const protoDescriptor = grpc.loadPackageDefinition(
//         this.packageDefinition,
//       );
//
//       // Verify the package structure
//       if (!protoDescriptor.proxy) {
//         throw new Error(
//           'Could not find proxySng.Sng service in proto definition',
//         );
//       }
//
//       // Get the service constructor
//       const sngService = protoDescriptor.proxySng;
//       console.log('Loaded gRPC service:', sngService);
//       if (typeof sngService !== 'function') {
//         throw new Error('proxySng is not a valid gRPC service constructor');
//       }
//
//       // Create client instance
//       this.client = new sngService(
//         '15.220.21.119:9001',
//         grpc.credentials.createInsecure(),
//       );
//
//       // Verify client creation
//       if (!this.client) {
//         throw new Error('Failed to create gRPC client instance');
//       }
//
//       this.logger.log('gRPC client initialized successfully');
//     } catch (error) {
//       this.logger.error('Failed to initialize gRPC client', error);
//       throw error; // Rethrow to prevent application startup if gRPC is critical
//     }
//   }
//
//   getUserExportData(): Observable<GetUserExportDataResponse> {
//     return new Observable<GetUserExportDataResponse>((observer) => {
//       this.logger.log('Making gRPC call to getUserExportData');
//
//       if (!this.client) {
//         observer.error(new Error('gRPC client not initialized'));
//         return;
//       }
//
//       // Verify the method exists
//       if (typeof this.client.getUserExportData !== 'function') {
//         observer.error(
//           new Error('getUserExportData method not found on gRPC service'),
//         );
//         return;
//       }
//
//       this.client.getUserExportData(
//         {},
//         (error: any, response: GetUserExportDataResponse) => {
//           if (error) {
//             this.logger.error('gRPC call failed', error);
//             observer.error(error);
//           } else {
//             this.logger.log('gRPC call successful', response);
//             observer.next(response);
//             observer.complete();
//           }
//         },
//       );
//     }).pipe(
//       timeout(10000),
//       catchError((error) => {
//         this.logger.error('gRPC operation failed', error);
//         return throwError(() => error);
//       }),
//     );
//   }
// }
