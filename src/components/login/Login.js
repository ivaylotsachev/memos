import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/actions/usersAction";
import Form from "../form/Form";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (data) => {
        console.log("login component", data);

        // signInWithEmailAndPassword(auth, values.email, values.password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         dispatch(setUser(user));
        //         navigate("/")
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;

        //         console.log("logni error", errorMessage)
        //     });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container register-page flex flex-column flex-center'
        >
            <Form
                title="Login"
                type="login"
                handleSubmit={handleSubmit}
            />
        </motion.div>
    );
};

export default Login;
