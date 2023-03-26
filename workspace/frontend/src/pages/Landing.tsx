import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"
import '../assets/landing.scss'

export const Landing = () => {

  const GET_ALL_NEWS = gql`
    query {
        findAllNews {
            mark,
            title,
            imagelink
        }
    }
  `

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
