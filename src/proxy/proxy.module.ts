import { Module } from '@nestjs/common';
import { ProxyController } from './proxy.controller';
import { GrpcClientService } from 'src/grpc/grpc-client.service';
import { ZodValidationService } from 'src/validators/validator';

@Module({
  controllers: [ProxyController],
  providers: [GrpcClientService, ZodValidationService],
  exports: [GrpcClientService],
})
export class ProxyModule {}
