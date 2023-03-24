import { useLazyQuery } from "@apollo/client"
import { useState } from "react"
import { Link, Navigate } from 'react-router-dom'
import { JOURNALIST_LOGIN } from "../graphql/journalist/queries"
import '../assets/login.scss'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const [loginJournalist, { loading, data }] = useLazyQuery(JOURNALIST_LOGIN)

  if(data) {
    const mark = data?.loginJournalist.mark
    const ema = data?.loginJournalist.email
    const mob = data?.loginJournalist.mobile

    if(ema === email && mob === mobile) {
      return <Navigate to={`/${mark}/publish`} />
    }
  }

  return (
    <div className="login">
      <form onSubmit={(e) => {
        e.preventDefault()
        loginJournalist({ variables: { loginInput: { email, mobile } } })
      }}>
        <div className="input">
          <input name="email" placeholder='Имэйл' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="input">
          <input name="mobile" placeholder='Утас' onChange={(e) => setMobile(e.target.value)} />
        </div>

        <div className="submit">
          <Link to="/">Буцах</Link>
          <button type="submit">Нэвтрэх</button>
        </div>
      </form>

      <Link className="reglink" to="/register">Эсвэл бүртгүүлэх</Link>
    </div>
  )
}
