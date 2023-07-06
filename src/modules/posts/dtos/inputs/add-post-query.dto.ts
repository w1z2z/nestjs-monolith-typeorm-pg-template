import { ApiProperty } from '@nestjs/swagger';

export class AddPostQueryDto {
  @ApiProperty({
    description: 'Заголовок поста',
    example: 'Пример заголовка',
  })
  title: string;
}
