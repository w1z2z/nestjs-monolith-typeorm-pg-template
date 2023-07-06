import { ApiProperty } from '@nestjs/swagger';

export class GetPostsQueryDto {
  @ApiProperty()
  take: number;

  @ApiProperty()
  skip: number;
}
