import { useQuery } from "@apollo/client"
import { GET_ALL_NEWS } from "../graphql/news/queries"
import { Link } from "react-router-dom"
import '../assets/landing.scss'

export const Landing = () => {

  const { data } = useQuery(GET_ALL_NEWS)

  return (
    <div className="wrap">
      {
        data?.findAllNews.map((news: any, num: any) => {
          
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
