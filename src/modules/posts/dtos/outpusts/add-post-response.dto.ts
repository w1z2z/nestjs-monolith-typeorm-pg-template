import { ApiProperty } from '@nestjs/swagger';

export class AddPostResponseDto {
  @ApiProperty({
    description: 'Идентификатор поста',
    example: 'df39c65f-0b4b-4b6a-83b1-87a7eb5c12a5',
  })
  id: string;

  @ApiProperty({
    description: 'Заголовок поста',
    example: 'Пример заголовка',
  })
  title: string;
}
