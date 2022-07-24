import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setLoginError, setUser } from "../../redux/actions/usersAction";
import LoginForm from "../forms/LoginForm";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (data) => {
        console.log("login component", data);

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser(user));
                navigate("/");
            })
            .catch((error) => {
                dispatch(setLoginError(error.message));
                setTimeout(() => {
                    dispatch(setLoginError(""));
                }, 3000);
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container register-page flex flex-column flex-center'
        >
            <LoginForm handleSubmit={handleSubmit} />
        </motion.div>
    );
};

export default Login;
