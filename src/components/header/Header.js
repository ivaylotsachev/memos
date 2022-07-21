import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { motion } from 'framer-motion';
import { FiLogIn, FiLogOut, FiClipboard, FiFilePlus, FiHome } from 'react-icons/fi';

// styles
import "./Header.scss";
import { setUser } from '../../redux/actions/usersAction';

const Header = () => {
    // constants
    const user = useSelector(state => state.users.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
            navigate("/");
        }).catch((error) => {
            console.log("logout error: ", error.message);
        });
    }

    return (
        <header className="app-header p-3 w-100">
            <nav className="app-nav flex aic w-100">
                <ul className="app-nav-list w-100 flex aic jcsb">
                    <li className="app-nav-list-item aic">
                        <NavLink to={"/"} className="flex aic">
                            <FiHome className='mr-2'/>
                            <span>Memos</span>
                        </NavLink>
                    </li>
                    {!user && <div className="app-nav-user-actions flex aic">
                        <li className="app-nav-list-item aic">
                            <NavLink to={"/login"} className='flex aic app-nav-list-item'>
                                <FiLogIn className='mr-2'/>
                                <span>Login</span>
                            </NavLink>
                        </li>
                    </div>}
                    {user && <div className="app-nav-user-actions flex aic">
                        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} exit={{opacity: 0}} className="app-nav-list-item aic">
                            <NavLink to={"/create-post"} className='flex aic app-nav-list-item mr-3'>
                                <FiFilePlus className='mr-2'/>
                                <span>Create Post</span>
                            </NavLink>
                        </motion.li>
                        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} className="app-nav-list-item aic">
                            <NavLink to={"/user-posts"} className='flex aic app-nav-list-item mr-3'>
                                <FiClipboard className='mr-2'/>
                                <span>My posts</span>
                            </NavLink>
                        </motion.li>
                        <motion.li initial={{opacity: 0}} animate={{ opacity: 1}} className="app-nav-list-item aic" onClick={handleLogout}>
                            <NavLink to={"/login"} className='flex aic app-nav-list-item mr-3'>
                                <FiLogOut className='mr-2'/>
                                <span>Logout</span>
                            </NavLink>
                        </motion.li>
                        <motion.img  initial={{opacity: 0}} animate={{ opacity: 1}} className='user-avatar' src={user && user.photoURL} alt="user avatar" />
                    </div>}
                </ul>
            </nav>
        </header>
    )
}

export default Header;