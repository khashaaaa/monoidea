import { gql, useSubscription } from "@apollo/client";

export const commentSubs = () => {

    const GET_ALL_COMMENT = gql`
        subscription {
            findAllComment {
                mark,
                user,
                text,
                created
            }
        }
    `

    const { loading, error, data } = useSubscription(GET_ALL_COMMENT)

    return data
}