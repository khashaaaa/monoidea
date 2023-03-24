import { Link } from 'react-router-dom'
import '../assets/head.scss'

export const Head = () => {
  return (
    <div className="brand">
      <div className="topbar">
        <Link to="/login">Сэтгүүлч Нэвтрэх</Link>
        <Link to="/">Үйлчлүүлэгчийн туслалцаа</Link>
        <Link to="/">Эрх зүй</Link>
      </div>
      <div className="inner">
        <Link to="/">Mono Press</Link>
      </div>
    </div>
  )
}
