import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateJournalistInput {
    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    mobile: string;
}