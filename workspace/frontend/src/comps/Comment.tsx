import { gql, useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../assets/comment.scss'

interface CommentProps {
  newsmark: any;
}

export const Comment = ({ newsmark }: CommentProps) => {

    const GET_ALL_COMMENT = gql`
        query FindAllComment($news: String!) {
            findAllComment(news: $news) {
                mark,
                text,
                user
            }
        }
    `

    const ADD_COMMENT = gql`
        mutation CreateComment($createCommentInput: CreateCommentInput!) {
            createComment(createCommentInput: $createCommentInput) {
                mark,
                text,
                user,
                created
            }
        }
    `

    const navigate = useNavigate()

    const [liked, setLiked] = useState(false)
    const [text, setText] = useState('')

    const { data: allComment } = useQuery(GET_ALL_COMMENT, { variables: { news: newsmark } })
    const [addComment, { data: commentAdded }] = useMutation(ADD_COMMENT)

    useEffect(() => {
      if (commentAdded) {
        navigate(0)
      }
    }, [commentAdded, navigate])

    return (
        <div className="comment">
            <form onSubmit={(e) => {
                e.preventDefault()
                addComment({ variables: { createCommentInput: { text, news: newsmark, user: 'Зочин' } } })
            }}>
                <div className="bar">
                    <p className="title">Сэтгэгдэл үлдээх</p>
                    {
                        liked === false ?
                        <button onClick={(e) => {
                            e.preventDefault()
                            setLiked(!liked)
                        }} className="unliked">like</button>
                        :
                        <button onClick={(e) => {
                            e.preventDefault()
                            setLiked(!liked)
                        }} className="liked">liked</button>
                    }
                </div>
                <textarea rows={4} onChange={(e) => setText(e.target.value)}></textarea>
                <div className="submit">
                    <button type="submit">Болсон</button>
                </div>
            </form>

            <div className="conversations">
                {
                    allComment?.findAllComment.map((comm: any, num: number) => {
                        return <div className="comm" key={num}>
                            <p className="user">{comm.user}: </p>
                            <p>{comm.text}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}