import { Link } from 'react-router-dom'
import '../assets/foot.scss'

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

                <div className="section">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.0552987957503!2d106.91243295115264!3d47.89661497910289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693c842c5341f%3A0xcb3ba06f13002f80!2zT25vbSBmb3VuZGF0aW9uIC0g0J7QvdC-0Lwg0YHQsNC9!5e0!3m2!1sen!2smn!4v1679569952620!5m2!1sen!2smn"
                        width={380}
                        height={200}
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <div className="bottomline">Зохиогчийн эрх хуулиар хамгаалагдсан &copy; <p>{year} он</p></div>
        </div>
    )
}
