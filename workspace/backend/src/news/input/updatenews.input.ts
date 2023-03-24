import { InputType, Field } from '@nestjs/graphql';
import { NewsType } from '../../variant/newstype';

@InputType()
export class UpdateNewsInput {
    @Field()
    mark: string;
    
    @Field()
    title: string;

    @Field()
    body: string;

    @Field(() => NewsType)
    type: NewsType;
}