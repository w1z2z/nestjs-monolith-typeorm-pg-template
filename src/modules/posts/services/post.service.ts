import { Injectable, NotFoundException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { PostEntity } from "@/modules/posts/entities";
import { AddPostQueryDto, AddPostResponseDto, GetPostByIdResponseDto, GetPostsResponseDto } from "@/modules/posts/dtos";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity) private postRepo: Repository<PostEntity>,
  ) {}

  async addNewPost(data: AddPostQueryDto): Promise<AddPostResponseDto> {
    const post = {
      title: data.title,
    }
    try {
      return await this.postRepo.save(post);
    } catch (error) {
      throw new InternalServerErrorException('Не удалось создать пост');
    }
  }

  async getPosts(take: number = 10, skip: number): Promise<GetPostsResponseDto> {
    try {
      const posts = await this.postRepo.find({
        take: take,
        skip: skip
      });
      const total = await this.postRepo.count();
      return {
        total: total,
        posts: posts
      };
    } catch (error) {
      throw new InternalServerErrorException('Не удалось получить посты');
    }
  }

  async getPostsById(postId: string): Promise<GetPostByIdResponseDto> {
    try {
      return await this.postRepo.findOne({
        where: {
          id: postId
        }
      });
    } catch (error) {
      throw new InternalServerErrorException('Не удалось получить пост по идентификатору');
    }
  }

  async delPostsById(postId: string): Promise<string> {
    try {
      const deleteResult = await this.postRepo.delete({id: postId});
      if (deleteResult.affected === 0) {
        throw new NotFoundException('Пост не найден');
      }
      return postId;
    } catch (error) {
      throw new InternalServerErrorException('Не удалось удалить пост');
    }
  }

}
