import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { LikeService } from './like.service';
import { Like } from './like.entity';
import { CreateLikeInput } from './input/createlike.input';

@Resolver(() => Like)
export class LikeResolver {
  constructor(private readonly likeService: LikeService) {}

  @Mutation(() => Like)
  async createLike(@Args('createLikeInput') createLikeInput: CreateLikeInput): Promise<Like> {
    return this.likeService.createOne(createLikeInput);
  }

  @Mutation(() => Like)
  async removeLike(@Args('mark', { type: () => Int }) mark: number): Promise<any> {
    return this.likeService.removeOne(mark);
  }
}
