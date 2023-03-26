import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { envconfig } from '../config/envconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JournalistModule } from './journalist/journalist.module';
import { NewsModule } from './news/news.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/variables/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [envconfig]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (confserv: ConfigService) => ({
        type: 'postgres',
        host: confserv.get('PG_HOST'),
        port: confserv.get('PG_PORT'),
        username: confserv.get('PG_USER'),
        password: confserv.get('PG_PWD'),
        database: confserv.get('PG_NAME'),
        synchronize: true,
        autoLoadEntities: true
      })
    }),
    JournalistModule,
    NewsModule,
    CommentModule,
    LikeModule
  ],
  controllers: [AppController],
  providers: [AppService, PubSub],
})
export class AppModule {}
