import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { env } from './config/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS if needed
  app.enableCors();

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Proxy API')
    .setDescription(`
Proxy API with gRPC integration

## Authentication
This API uses API Key authentication. To access the endpoints:
1. Include the \`${env.API_KEY_HEADER}\` header in your requests
2. Provide your API key as the header value

Example:
\`\`\`
${env.API_KEY_HEADER}: your-api-key-here
\`\`\`
    `)
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: env.API_KEY_HEADER,
        in: 'header',
        description: 'Enter your API key to authenticate',
      },
      'api-key',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // Customize Swagger UI options
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      docExpansion: 'list',
    },
  });

  await app.listen(env.PORT, env.HOST);
  console.log(`Application is running on: http://${env.HOST}:${env.PORT}`);
  console.log(`Swagger UI: http://${env.HOST}:${env.PORT}/api`);
}

bootstrap();
