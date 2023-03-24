import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { News } from './news.entity';
import { Journalist } from '../journalist/journalist.entity';
import { CreateNewsInput } from './input/createnews.input';
import { UpdateNewsInput } from './input/updatenews.input';
import { TypeFilter } from './input/typefilter.input';
import { NewsType } from '../variant/newstype';

@Resolver(() => News)
export class NewsResolver {

  constructor(private readonly newsService: NewsService) {}

  @Mutation(() => News)
  async createNews(@Args('createNewsInput', { type: () => CreateNewsInput }) paramz: CreateNewsInput): Promise<News> {
    return this.newsService.createOne(paramz);
  }

  @Query(() => [News])
  async findAllNews(): Promise<News[]> {
    return this.newsService.showAll();
  }

  @Query(() => News)
  async findOneNews(@Args('mark', { type: () => String }) mark: string): Promise<News> {
    return this.newsService.showOne(mark);
  }

  @Mutation(() => News)
  async updateNews(@Args('updateNewsInput', { type: () => UpdateNewsInput }) paramz: UpdateNewsInput): Promise<News> {
    return this.newsService.editOne(paramz);
  }

  @Mutation(() => String)
  async removeNews(@Args('mark', { type: () => String }) mark: string): Promise<any> {
    return this.newsService.removeOne(mark);
  }

  @Query(() => [News])
  async typeFilter(@Args('type', { type: () => String }) type: NewsType): Promise<any> {
    return this.newsService.getType(type)
  }

  @ResolveField(() => Journalist)
  async getJournalist(@Parent() news: News): Promise<Journalist> {
    return this.newsService.getJournalist(news.journalist)
  }
}
