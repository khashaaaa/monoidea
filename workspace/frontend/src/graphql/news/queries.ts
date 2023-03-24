import { gql } from '@apollo/client'

export const GET_ALL_NEWS = gql`
    query {
        findAllNews {
            mark,
            title,
            imagelink
        }
    }
`

export const GET_ONE_NEWS = gql`
    query FindOneNews($mark: String!) {
        findOneNews(mark: $mark) {
            mark,
            title,
            body,
            imagelink,
            markJournalist,
            created,
            getJournalist {
                name
            }
        }
    }
`

export const GET_NEWS_BY_TYPE = gql`
    query TypeFilter($type: String!) {
        typeFilter(type: $type) {
            mark,
            title,
            imagelink
        }
    }
`