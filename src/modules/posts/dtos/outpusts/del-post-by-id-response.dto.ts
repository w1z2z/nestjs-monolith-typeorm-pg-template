import { ApiProperty } from '@nestjs/swagger';

export class DeletePostResponseDto {
  @ApiProperty({
    description: 'Идентификатор удаленного поста',
    example: 'df39c65f-0b4b-4b6a-83b1-87a7eb5c12a5',
  })
  id: string;
}
