import { Link } from "react-router-dom";

const NavMenu = () => {
    return(
        <div>
            <Link to='/'>mainPage</Link>
            <Link to='Page1'> Page1</Link>
            <Link to='Page3'> Page3</Link>
        </div>
    )
}

export default NavMenu;