import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { CreateCommentInput } from './input/createcomment.input';
import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()

@Resolver(() => Comment)
export class CommentResolver {
  
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => Comment)
  async createComment(@Args('createCommentInput') createCommentInput: CreateCommentInput): Promise<Comment> {
    const resp = this.commentService.createOne(createCommentInput);
    pubsub.publish('commentAdded', { commentAdded: resp });
    return resp;
  }

  @Subscription(() => Comment, {
    filter: (payload, variables) => payload.commentAdded.news === variables.news
  })
  async commentAdded(): Promise<any> {
    return pubsub.asyncIterator('commentAdded');
  }

  @Query(() => [Comment])
  async findAllComment(@Args('news', { type: () => String }) news: string): Promise<Comment[]> {
    return this.commentService.showAllByNews(news);
  }
}
