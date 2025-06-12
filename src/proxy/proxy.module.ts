import { Module } from '@nestjs/common';
import { ProxyController } from './proxy.controller';
import { ProxyService } from './proxy.service';
import { GrpcClientModule } from '../grpc/grpc-client.module';
import { ZodValidationService } from '../validators/validator';

@Module({
  imports: [GrpcClientModule],
  controllers: [ProxyController],
  providers: [ProxyService, ZodValidationService],
  exports: [ProxyService],
})
export class ProxyModule {}
