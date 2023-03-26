import { gql, useLazyQuery } from "@apollo/client"
import { useState } from "react"
import { Link, Navigate } from 'react-router-dom'
import '../assets/login.scss'

export const Login = () => {

  const JOURNALIST_LOGIN = gql`
      query LoginJournalist($loginInput: LoginInput!) {
          loginJournalist(loginInput: $loginInput)
          {
              mark,
              name,
              email,
              mobile
          }
      }
  `

  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const [loginJournalist, { loading, error, data }] = useLazyQuery(JOURNALIST_LOGIN)

  if(data) {
    const mark = data?.loginJournalist.mark
    const ema = data?.loginJournalist.email
    const mob = data?.loginJournalist.mobile
    localStorage.setItem("journalist", JSON.stringify(data?.loginJournalist))

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
