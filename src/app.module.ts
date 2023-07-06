import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

import * as entities from "@/entities";
import { PostsModule } from "@/modules/posts/posts.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [...Object.values(entities)],
        //лучше использовать миграции для внесения изменений в БД
        synchronize: true,
      }
    ),
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
