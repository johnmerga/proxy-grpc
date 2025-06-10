import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'proxySng',
    protoPath: join(process.cwd(), 'src/proto/proxy.proto'),
    url: 'localhost:5000',
  },
};
