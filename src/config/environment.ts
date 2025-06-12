import * as dotenv from 'dotenv';
import { cleanEnv, host, port, str, testOnly } from 'envalid';

export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  TEST = 'test',
}

const envFile =
  process.env.NODE_ENV === Environment.TEST ? '.env.test' : '.env';
dotenv.config({ path: envFile });

export const env = cleanEnv(process.env, {
  // Environment
  NODE_ENV: str({
    devDefault: testOnly(Environment.DEVELOPMENT),
    choices: [
      Environment.DEVELOPMENT,
      Environment.PRODUCTION,
      Environment.TEST,
    ],
    desc: 'Current environment',
  }),

  // API Security
  API_KEY_HEADER: str({
    default: 'x-api-key',
    desc: 'Header name for API key authentication,split by comma if multiple. i.e. x-api-key, x-another-key',
  }),
  API_KEYS: str({
    devDefault: testOnly('development-api-key,test-api-key'),
    desc: 'Comma-separated list of valid API keys',
  }),

  // Server
  PORT: port({ default: 3000, desc: 'Port for the HTTP server' }),
  HOST: host({ devDefault: 'localhost', desc: 'Host for the HTTP server' }),

  // gRPC Configuration
  GRPC_HOST: host({ devDefault: 'localhost', desc: 'gRPC server host' }),
  GRPC_PORT: port({ default: 8081, desc: 'gRPC server port' }),
});

export const apiKeys = env.API_KEYS.split(',').map((key) => key.trim());

