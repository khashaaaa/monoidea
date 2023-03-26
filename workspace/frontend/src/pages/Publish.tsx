import { gql, useMutation } from '@apollo/client'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import '../assets/publish.scss'

export const Publish = () => {

    const PUBLISH_NEWS = gql`
        mutation CreateNews($createNewsInput: CreateNewsInput!) {
            createNews(createNewsInput: $createNewsInput) {
                mark
            }
        }
    `

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [imagelink, setImagelink] = useState('')
    const [type, setType] = useState('')

    const { mark } = useParams()

    const [createNews, { data }] = useMutation(PUBLISH_NEWS)

    if(data) {
        setTimeout(() => {
            return navigate(0)
        }, 1000)
    }

    return (
        <div className="publish">
            <h3 className="title">{data ? 'Мэдээ нийтлэгдлээ' : 'Нийтлэх'}</h3>
            <form onSubmit={(e) => {
                e.preventDefault()
                createNews({ variables: { createNewsInput: { title, body, imagelink, journalist: mark, markJournalist: mark,  type } } })
            }}>
                <input name="title" placeholder='Гарчиг' onChange={e => setTitle(e.target.value)} />
                <input name="body" placeholder='Мэдээлэл' onChange={e => setBody(e.target.value)} />
                <input name="imagelink" placeholder='Зургийн вэб линк' onChange={e => setImagelink(e.target.value)} />
                <select name="type" onChange={e => setType(e.target.value)}>
                    <option value="none" defaultValue={'none'}>Төрөл сонгох</option>
                    <option value="POLITICS">Улс төр</option>
                    <option value="ECONOMICS">Эдийн засаг</option>
                    <option value="TECHNOLOGY">Технологи</option>
                    <option value="SOCIETY">Нийгэм</option>
                    <option value="WORLD">Дэлхий дахин</option>
                </select>
                <div className="submit">
                    <Link to="/">Буцах</Link>
                    <button type="submit">Нийтлэх</button>
                </div>
            </form>
        </div>
    )
}
