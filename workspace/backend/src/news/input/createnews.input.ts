import { InputType, Field } from '@nestjs/graphql';
import { NewsType } from '../../variant/newstype';

@InputType()
export class CreateNewsInput {
    @Field()
    title: string;

    @Field()
    body: string;

    @Field()
    imagelink: String;

    @Field()
    markJournalist: String;

    @Field()
    journalist: string;

    @Field(() => NewsType)
    type: NewsType;
}