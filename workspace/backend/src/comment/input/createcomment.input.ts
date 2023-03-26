import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field(() => String)
  text: string;

  @Field(() => String)
  user: string;

  @Field(() => String)
  news: string;
}
