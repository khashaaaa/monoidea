import { useQuery } from "@apollo/client"
import { GET_ALL_NEWS } from "../graphql/news/queries"
import '../assets/sidebar.scss'
import { Link } from "react-router-dom"

export const Sidebar = () => {

    const { data } = useQuery(GET_ALL_NEWS)

    return (
        <div className="sidebar">
            {
                data?.findAllNews.map((news: any, num: any) => {
                    return (
                        <Link to={`/${news.mark}`} key={num} className="recent">
                            <h5 className="title">{news.title}</h5>
                        </Link>
                    )
                })
            }
        </div>
    )
}
