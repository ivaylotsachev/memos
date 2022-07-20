import { NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

// styles
import "./Header.scss";

const Header = () => {
    return (
        <header className="app-header p-3 w-100">
            <nav className="app-nav w-100">
                <ul className="app-nav-list w-100 flex aic jcsb">
                    <li className="app-nav-list-item">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <div className="app-nav-user-actions">
                        <NavLink to={"/login"} className='flex aic app-nav-list-item'>
                            <FiLogIn className='mr-2'/>
                            <span>Login</span>
                        </NavLink>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;