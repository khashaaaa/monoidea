import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JournalistService } from './journalist.service';
import { Journalist } from './journalist.entity';
import { CreateJournalistInput } from './input/createjournalist.input';
import { UpdateJournalistInput } from './input/updatejournalist.input';
import { LoginInput } from './input/loginjournalist.input';

@Resolver(() => Journalist)
export class JournalistResolver {

  constructor(private readonly journalistService: JournalistService) {}

  @Query(() => Journalist)
  async loginJournalist(@Args('loginInput', { type: () => LoginInput }) paramz: LoginInput): Promise<any> {
    return this.journalistService.login(paramz)
  }

  @Mutation(() => Journalist)
  async createJournalist(@Args('createJournalistInput', { type: () => CreateJournalistInput }) paramz: CreateJournalistInput): Promise<Journalist> {
    return this.journalistService.createOne(paramz);
  }

  @Query(() => [Journalist])
  async findAllJournalist(): Promise<Journalist[]> {
    return this.journalistService.showAll();
  }

  @Query(() => Journalist)
  async findOneJournalist(@Args('mark', { type: () => String }) mark: string): Promise<Journalist> {
    return this.journalistService.showOne(mark);
  }

  @Mutation(() => Journalist)
  async updateJournalist(@Args('updateJournalistInput', { type: () => UpdateJournalistInput }) paramz: UpdateJournalistInput): Promise<Journalist> {
    return this.journalistService.editOne(paramz);
  }

  @Mutation(() => String)
  async removeJournalist(@Args('mark', { type: () => String }) mark: string): Promise<any> {
    return this.journalistService.removeOne(mark);
  }
}
