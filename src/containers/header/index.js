import NavMenu from "../../components/NavMenu";
import './style.css'

const Header = () => {
    return(
        <div className="header">
            <div className="logo">&#128062; logo</div>
            <NavMenu />
            <div className="other-items">other item</div>
        </div>
    )
}

export default Header;