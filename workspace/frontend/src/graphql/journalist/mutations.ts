import { gql } from '@apollo/client'

export const PUBLISH_NEWS = gql`
    mutation CreateNews($createNewsInput: CreateNewsInput!) {
        createNews(createNewsInput: $createNewsInput) {
            mark
        }
    }
`

export const REGISTER_JOURNALIST = gql`
    mutation CreateJournalist($createJournalistInput: CreateJournalistInput!) {
        createJournalist(createJournalistInput: $createJournalistInput) {
            mark,
            name,
            email,
            mobile
        }
    }
`