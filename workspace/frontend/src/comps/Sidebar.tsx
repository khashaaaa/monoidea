import { gql, useQuery } from "@apollo/client"
import '../assets/sidebar.scss'
import { Link } from "react-router-dom"

// Recent news section
export const Sidebar = () => {

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
        <div className="sidebar">
            <div className="title">
                <p>Сүүлийн мэдээ</p>
            </div>
            {
                data?.findAllNews.map((news: any, num: any) => {
                    return (
                        <Link to={`/${news.mark}`} key={num} className="recent">
                            <h5 className="post">{news.title}</h5>
                        </Link>
                    )
                })
            }
        </div>
    )
}
