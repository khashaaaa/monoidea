import { Link } from 'react-router-dom'
import '../assets/head.scss'

// Top section
export const Head = () => {

  return (
    <div className="brand">
      <div className="topbar">
        <Link to="/login">Мэдээ нийтлэх</Link>
      </div>
      <div className="inner">
        <Link to="/">Mono Press</Link>
      </div>
    </div>
  )
}
