import { ApiProperty } from '@nestjs/swagger';

export class GetUserExportDataResponseDto {
  @ApiProperty({
    example: true,
    description: 'Whether the request was successful',
  })
  success: boolean;

  @ApiProperty({
    example: 'User export data here...',
    description: 'The exported user data',
  })
  data: string;
}

export class ProxyResponseDto {
  @ApiProperty({
    example: true,
    description: 'Whether the proxy request was successful',
  })
  success: boolean;

  @ApiProperty({
    example: 'Data retrieved successfully',
    description: 'Response message',
  })
  message: string;

  @ApiProperty({
    type: GetUserExportDataResponseDto,
    description: 'The data from the gRPC service',
  })
  data: GetUserExportDataResponseDto;
}
