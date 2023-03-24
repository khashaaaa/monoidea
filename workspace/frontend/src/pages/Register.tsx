import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { REGISTER_JOURNALIST } from '../graphql/journalist/mutations'
import '../assets/register.scss'

export const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const [createJournalist, { loading, data }] = useMutation(REGISTER_JOURNALIST)

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
