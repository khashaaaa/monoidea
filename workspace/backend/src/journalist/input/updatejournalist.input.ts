import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateJournalistInput {
    @Field()
    mark: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    mobile: string;
}