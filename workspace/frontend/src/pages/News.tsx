import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { GET_ONE_NEWS } from "../graphql/news/queries"
import { Comment } from "../comps/Comment"
import '../assets/news.scss'

export const News = () => {

    const { mark } = useParams()
    const { data } = useQuery(GET_ONE_NEWS, { variables: { mark } })

    return (
        <div className="news">
            <h3 className="title">{data?.findOneNews.title}</h3>
            <h5 className="journalist">Сэтгүүлч: {data?.findOneNews.markJournalist}</h5>
            <p className="body">{data?.findOneNews.body}</p>
            <img className="image" src={data?.findOneNews.imagelink} />
            <Comment />
        </div>
    )
}
