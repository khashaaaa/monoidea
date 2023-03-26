import { Link } from 'react-router-dom'
import '../assets/foot.scss'

// Footer section of website
export const Foot = () => {

    const d = new Date()
    const year = d.getFullYear()

    return (
        <div className="foot">
            <div className="wrap">
                <div className="section">
                    <Link to="">Холбоо барих</Link>
                    <Link to="">Хамтран ажиллах</Link>
                    <Link to="">Хаяг байршил</Link>
                    <Link to="">Зурвас үлдээх</Link>
                </div>

                <div className="section">
                    <Link to="">Хууль эрх зүй</Link>
                    <Link to="">Сурталчилгаа</Link>
                    <Link to="">Зохиогчийн эрх</Link>
                    <Link to="">Ажлын байр</Link>
                </div>
            </div>
            <div className="bottomline">Зохиогчийн эрх хуулиар хамгаалагдсан &copy; <p>{year} он</p></div>
        </div>
    )
}
