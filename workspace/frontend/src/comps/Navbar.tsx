import { Link } from 'react-router-dom'
import '../assets/navbar.scss'

// Navigation of website
export const Navbar = () => {

    return (
        <div className="navbar">
            <div className="inner">
                <Link to="/category/POLITICS">
                    <div className="tag">УЛС ТӨР</div>
                </Link>
                <Link to="/category/ECONOMICS">
                    <div className="tag">ЭДИЙН ЗАСАГ</div>
                </Link>
                <Link to="/category/TECHNOLOGY">
                    <div className="tag">ТЕХНОЛОГИ</div>
                </Link>
                <Link to="/category/SOCIETY">
                    <div className="tag">НИЙГЭМ</div>
                </Link>
                <Link to="/category/WORLD">
                    <div className="tag">ДЭЛХИЙ ДАХИН</div>
                </Link>
            </div>
        </div>
    )
}
