import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { PostController } from "./controllers";
import { PostService } from "./services";
import * as entities from "@/entities";

@Module({
  imports: [TypeOrmModule.forFeature([...Object.values(entities)])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostsModule {}
