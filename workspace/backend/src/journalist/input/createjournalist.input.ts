import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateJournalistInput {
    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    mobile: string;
}