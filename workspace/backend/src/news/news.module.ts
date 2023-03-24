import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsResolver } from './news.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './news.entity';
import { JournalistModule } from '../journalist/journalist.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([News]),
    JournalistModule
  ],
  providers: [NewsResolver, NewsService]
})
export class NewsModule {}
