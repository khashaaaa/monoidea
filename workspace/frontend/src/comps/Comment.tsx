import { useState } from 'react'
import '../assets/comment.scss'

export const Comment = () => {

    const [liked, setLiked] = useState(false)

    return (
        <div className="comment">
            <form>
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
                <textarea rows={5}></textarea>
                <div className="submit">
                    <button type="submit">Болсон</button>
                </div>
            </form>
        </div>
    )
}
