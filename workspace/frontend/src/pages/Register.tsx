import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../assets/register.scss'

// Register publisher name
export const Register = () => {

    const REGISTER_JOURNALIST = gql`
        mutation CreateJournalist($createJournalistInput: CreateJournalistInput!) {
            createJournalist(createJournalistInput: $createJournalistInput) {
                mark,
                name,
                email,
                mobile
            }
        }
    `

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const [createJournalist, { loading, error, data }] = useMutation(REGISTER_JOURNALIST)

    if(data) {
        return <Navigate to="/login" />
    }

    return (
        <div className="register">
            <form onSubmit={(e) => {
                e.preventDefault()
                createJournalist({ variables: { createJournalistInput: { name, email, mobile } } })
            }}>
                <div className="input">
                    <input name="name" placeholder='Нэр' onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="input">
                    <input name="email" placeholder='Имэйл' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input">
                    <input name="mobile" placeholder='Утасны дугаар' onChange={(e) => setMobile(e.target.value)} />
                </div>

                <div className="submit">
                    <Link to="/">Буцах</Link>
                    <button type="submit">Бүртгүүлэх</button>
                </div>
            </form>

            <Link className="loglink" to="/login">Эсвэл нэвтрэх</Link>
        </div>
    )
}
