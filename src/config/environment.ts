import * as dotenv from "dotenv";
import { cleanEnv, host, port, str, testOnly } from "envalid";

export enum Environment {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
  TEST = "test",
}

const envFile = process.env.NODE_ENV === Environment.TEST ? ".env.test" : ".env";
dotenv.config({ path: envFile });

export const env = cleanEnv(process.env, {
  // Environment
  NODE_ENV: str({
    devDefault: testOnly(Environment.DEVELOPMENT),
    choices: [Environment.DEVELOPMENT, Environment.PRODUCTION, Environment.TEST],
  }),

  // Server
  PORT: port({ default: 3000 }),
  HOST: host({ devDefault: "localhost" }),

  // gRPC Configuration
  GRPC_HOST: host({ devDefault: "localhost" }),
  GRPC_PORT: port({ default: 8081 }),

  // API Security
  API_KEY_HEADER: str({ default: "x-api-key" }),
  API_KEYS: str({
    devDefault: testOnly("development-api-key,test-api-key"),
    desc: "Comma-separated list of valid API keys",
  }),
});

// Split the API keys into an array
export const apiKeys = env.API_KEYS.split(',').map(key => key.trim());