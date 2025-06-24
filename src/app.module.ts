import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ProxyModule } from './proxy/proxy.module';
import { RequestLoggerMiddleware } from './utils/customLogger';

@Module({
  imports: [ProxyModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}
