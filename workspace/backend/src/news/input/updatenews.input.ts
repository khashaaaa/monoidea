import { InputType, Field } from '@nestjs/graphql';
import { NewsType } from '../../variant/newstype';

@InputType()
export class UpdateNewsInput {
    @Field(() => String)
    mark: string;
    
    @Field(() => String)
    title: string;

    @Field(() => String)
    body: string;

    @Field(() => NewsType)
    type: NewsType;
}