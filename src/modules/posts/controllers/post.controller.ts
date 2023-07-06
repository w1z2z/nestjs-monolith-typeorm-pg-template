import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { PostService } from "@/modules/posts/services";
import {
  AddPostQueryDto,
  AddPostResponseDto,
  DeletePostResponseDto,
  GetPostByIdResponseDto,
  GetPostsResponseDto
} from "@/modules/posts/dtos";
import { GetPostsQueryDto } from "@/modules/posts/dtos/inputs/get-posts-query.dto";


@ApiTags('Модуль поиска')
@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  @ApiOperation({ summary: 'Добавление нового поста' })
  @ApiOkResponse({
    type: AddPostResponseDto,
    description: 'Добавление нового поста'
  })
  @Post('add-new-post')
  async addNewPost(@Body() data: AddPostQueryDto): Promise<AddPostResponseDto> {
    return this.postService.addNewPost(data)
  }

  @ApiOperation({ summary: 'Получение всех постов' })
  @ApiOkResponse({
    type: GetPostsResponseDto,
    description: 'Получение всех постов'
  })
  @Get('get-posts')
  async getPosts(@Query() query: GetPostsQueryDto): Promise<GetPostsResponseDto> {
    return this.postService.getPosts(query.take, query.skip)
  }

  @ApiOperation({ summary: 'Получение поста по id' })
  @ApiOkResponse({
    type: GetPostByIdResponseDto,
    description: 'Получение поста по id'
  })
  @Get('get-post-by-id')
  async getPostsById(@Query() query: GetPostByIdResponseDto): Promise<GetPostByIdResponseDto> {
    return this.postService.getPostsById(query.id)
  }

  @ApiOperation({ summary: 'Удаление поста по id' })
  @ApiOkResponse({
    type: String,
    description: 'Удаление поста по id'
  })
  @Delete('del-post-by-id')
  async delPostsById(@Query() query: DeletePostResponseDto): Promise<string> {
    return this.postService.delPostsById(query.id)
  }
}
