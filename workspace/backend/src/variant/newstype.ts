import { registerEnumType } from '@nestjs/graphql';

export enum NewsType {
    POLITICS = 'POLITICS',
    ECONOMICS = 'ECONOMICS',
    TECHNOLOGY = 'TECHNOLOGY',
    SOCIETY = 'SOCIETY',
    WORLD = 'WORLD'
}

registerEnumType(NewsType, {
    name: 'NewsType',
    description: 'News types'
})