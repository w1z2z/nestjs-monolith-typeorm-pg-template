import { ApiProperty } from '@nestjs/swagger';
import { AddPostResponseDto } from "@/modules/posts/dtos";

export class GetPostsResponseDto {
  @ApiProperty({
    description: 'Общее количество постов',
    example: 10,
  })
  total: number;

  @ApiProperty({
    description: 'Массив постов',
    type: [AddPostResponseDto],
  })
  posts: AddPostResponseDto[];
}
