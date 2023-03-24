import { gql } from '@apollo/client'

export const JOURNALIST_LOGIN = gql`
    query LoginJournalist($loginInput: LoginInput!) {
        loginJournalist(loginInput: $loginInput)
        {
            mark,
            name,
            email,
            mobile
        }
    }
`

export const GET_ONE_JOURNALIST = gql`
    query FindOneJournalist($mark: String!) {
        findOneJournalist(mark: $mark) {
            mark,
            name
        }
    }
`