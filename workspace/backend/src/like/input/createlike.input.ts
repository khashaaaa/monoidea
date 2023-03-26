import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLikeInput {
  @Field(() => String)
  ipaddr: string;
}
