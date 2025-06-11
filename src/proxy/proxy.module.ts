import { Module } from '@nestjs/common';
import { ProxyController } from './proxy.controller';
import { GrpcClientService } from 'src/grpc/grpc-client.service';
import { ZodValidationService } from 'src/validators/validator';

@Module({
  controllers: [ProxyController],
  providers: [ZodValidationService, GrpcClientService],
  exports: [],
})
export class ProxyModule {}
