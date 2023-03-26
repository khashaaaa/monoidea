import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Comment } from "../comps/Comment"
import '../assets/news.scss'

export const News = () => {

    const GET_ONE_NEWS = gql`
        query FindOneNews($mark: String!) {
            findOneNews(mark: $mark) {
                mark,
                title,
                body,
                imagelink,
                created,
                getJournalist {
                    name
                }
            }
        }
    `

    const { mark } = useParams()
    const { data: allNews } = useQuery(GET_ONE_NEWS, { variables: { mark } })

    return (
        <div className="news">
            <h3 className="title">{allNews?.findOneNews.title}</h3>
            <p className="body">{allNews?.findOneNews.body}</p>
            <img className="image" src={allNews?.findOneNews.imagelink} />
            <Comment newsmark={mark} />
        </div>
    )
}
