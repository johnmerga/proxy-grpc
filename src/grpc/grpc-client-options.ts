import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'employee',
    protoPath: join(process.cwd(), 'src/proto/proxy.proto'),
    url: 'localhost:4500',
  },
};
