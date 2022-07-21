import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useValidate } from "../../hooks/useValidate";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/actions/usersAction";

const Login = () => {
    const [dbError, setDbError] = useState(false);
    const [values, errors, changeHandler, validator] = useValidate();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser(user));
                navigate("/")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log("logni error", errorMessage)
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container register-page flex flex-column flex-center'>
            <form className="register-container" onSubmit={handleSubmit}>
                <h1 className="form-title">Login</h1>
                <div className="divider mt-3 mb-4"></div>
                <div className='input-container flex flex-column'>
                    <label htmlFor='email' className="mb-2">Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        required
                        value={values.email}
                        onChange={changeHandler}
                        onBlur={validator}
                    />
                    {errors.email && !dbError && <p className="error-message mt-2 ml-3">Email is invalid!</p>}
                    {dbError && <p className="error-message ml-3">{dbError}</p>}
                </div>
                <div className='input-container flex flex-column my-2'>
                    <label htmlFor='password' className="mb-2">Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        required
                        value={values.password}
                        onChange={changeHandler}
                        onBlur={validator}
                    />
                    {errors.password && <p className="error-message mt-2 ml-3">Password must be at least 6 characters!</p>}
                </div>

                <button className='button button-success mt-3'>
                    Login
                </button>

                <div className="login-footer flex aic jcsb mt-5">
                    <p>Don`t have an account?</p>
                    <NavLink to="/register"><strong className="underlined">Register</strong></NavLink>
                </div>
            </form>
        </motion.div>
    );
};

export default Login;
