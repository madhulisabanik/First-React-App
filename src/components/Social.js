import TwitterIcon from "../images/twitter-icon.png"
import FacebookIcon from "../images/facebook-icon.png"
import InstaIcon from "../images/insta-icon.png"
import GitHubIcon from "../images/github-icon.png"

export default function Social () {
    return (
        <div className="social-icons">
            <img src={TwitterIcon} className="twitter-icon" />
            <img src={FacebookIcon} className="fb-icon" />
            <img src={InstaIcon} className="insta-icon" />
            <img src={GitHubIcon} className="github-icon" />
        </div>
    )
}