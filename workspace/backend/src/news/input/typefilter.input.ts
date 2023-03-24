import { InputType, Field } from '@nestjs/graphql';
import { NewsType } from '../../variant/newstype';

@InputType()
export class TypeFilter {
    @Field(() => NewsType)
    type: NewsType;
}