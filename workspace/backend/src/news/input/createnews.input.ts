import { InputType, Field } from '@nestjs/graphql';
import { NewsType } from '../../variant/newstype';

@InputType()
export class CreateNewsInput {
    @Field(() => String)
    title: string;

    @Field(() => String)
    body: string;

    @Field(() => String)
    imagelink: String;

    @Field(() => String)
    markJournalist: String;

    @Field(() => String)
    journalist: string;

    @Field(() => String)
    type: NewsType;
}