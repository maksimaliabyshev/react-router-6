import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className=" light-red darken-1">
            <div className="nav-wrapper">
                <Link to="/">React Router 6</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="movies">Movie</Link>
                    </li>
                    <li>
                        <Link to="contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
