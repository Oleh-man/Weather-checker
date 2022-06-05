import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <h1>
                <Link to='/'>Weather Checker</Link>
            </h1>
        </header>
    );
};

export default Header;