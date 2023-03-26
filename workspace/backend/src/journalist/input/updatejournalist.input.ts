import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateJournalistInput {
    @Field(() => String)
    mark: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    mobile: string;
}