import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { join } from 'path';
import { ProtoGrpcType } from 'src/proto/generated/proxy';
import { SngClient } from '../proto/generated/poker/Sng';
import { env } from '../config/environment';

@Injectable()
export class GrpcClientService implements OnModuleInit {
  private readonly logger = new Logger(GrpcClientService.name);
  private client: SngClient | null = null;
  private readonly grpcAddress: string;

  constructor() {
    this.grpcAddress = `${env.GRPC_HOST}:${env.GRPC_PORT}`;
  }

  async onModuleInit(): Promise<void> {
    await this.initializeClient();
  }

  private async initializeClient(): Promise<void> {
    try {
      const PROTO_PATH = join(process.cwd(), 'src/proto/proxy.proto');
      this.logger.log(`Loading gRPC proto file from: ${PROTO_PATH}`);

      const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      });

      const proto = grpc.loadPackageDefinition(
        packageDefinition,
      ) as unknown as ProtoGrpcType;

      this.client = new proto.poker.Sng(
        this.grpcAddress,
        grpc.credentials.createInsecure(),
      );

      // Waiting for client to be ready
      const deadline = new Date();
      deadline.setSeconds(deadline.getSeconds() + 5);

      await new Promise<void>((resolve, reject) => {
        if (!this.client) {
          reject(new Error('Failed to create gRPC client instance'));
          return;
        }

        this.client.waitForReady(deadline, (error?: Error) => {
          if (error) {
            this.logger.error(`Client connect error: ${error.message}`);
            reject(error);
          } else {
            this.logger.log(
              `gRPC client connected successfully at ${this.grpcAddress}`,
            );
            resolve();
          }
        });
      });
    } catch (error) {
      this.logger.error('Failed to initialize gRPC client', error);
      throw error;
    }
  }

  getClient(): SngClient {
    if (!this.client) {
      throw new Error('gRPC client not initialized');
    }
    return this.client;
  }
}
