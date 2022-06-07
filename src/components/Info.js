import ProfilePic from "../images/profile-picture.png"
import EmailIcon from "../images/email-icon.png"
import LinkedinIcon from "../images/linkedin-icon.png"

export default function Info(){
    return(
        <div>
            <img src={ProfilePic} className="card-img" />
            <div className="card-body">
                <p className="card-title">Madhulisa Banik</p>
                <span className="card-designation">Software Developer</span>
                <span className="card-email">madhulisa.banik@test.com</span>
                <div className="button-area">
                    <button className="email-button">
                        <img src={EmailIcon} className="email-logo" />
                        <p className="email-text">Email</p>
                    </button>
                    <button className="linkedin-button">
                        <img src={LinkedinIcon} className="linkedin-logo" />
                        <p className="linkedin-text">LinkedIn</p>
                    </button>
                </div>
            </div>
        </div>
    )
}