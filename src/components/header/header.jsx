import glasses from "../../assets/glasses.png"
import "./header.css"

function Header() {
    return (
        <img
            src={glasses}
            className="header-pic"
        >
        </img>
    )
}

export default Header