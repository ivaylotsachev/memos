import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

// styles
import "./Header.scss";

const Header = () => {
    // constants
    const [imageURL, setImageURL] = useState(null);
    const user = useSelector(state => state.users.user);

    // hooks
    useEffect(() => {
        user && setImageURL(user.photoURL)
        console.log("header", user.imageURL)
    }, [user])

    return (
        <header className="app-header p-3 w-100">
            <nav className="app-nav w-100">
                <ul className="app-nav-list w-100 flex aic jcsb">
                    <li className="app-nav-list-item">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <div className="app-nav-user-actions flex">
                        <NavLink to={"/login"} className='flex aic app-nav-list-item'>
                            <FiLogIn className='mr-2'/>
                            <span>Login</span>
                        </NavLink>
                        <img className='user-avatar ml-3' src={imageURL} alt="user avatar" />
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;