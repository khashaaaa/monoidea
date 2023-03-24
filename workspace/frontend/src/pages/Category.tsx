import { useQuery } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import { GET_NEWS_BY_TYPE } from "../graphql/news/queries"
import '../assets/landing.scss'

export const Category = () => {

    const { type } = useParams()
    const { data } = useQuery(GET_NEWS_BY_TYPE, { variables: { type } })

    return (
      <div className="wrap">
        {
          data?.typeFilter.map((news: any, num: any) => {
            
            return (
              <Link to={`/${news.mark}`} key={num} className="news">
                <h3 className="title">{news.title}</h3>
                <img className="image" src={news.imagelink} />
              </Link>
            )
          })
        }
      </div>
    )
}
