import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { checkForExistingUsername } from "../../utils/firebase/users";
import { registerUser } from "../../redux/actions/usersAction";
import RegisterForm from "../forms/RegisterForm";
import { setUsernameError } from "../../redux/actions/formAction";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userNameError = useSelector((state) => state.form.usernameError);

    const handleSubmit = async (user) => {
        console.log("register component", user);

        await checkForExistingUsername(user.name).then((exist) => {
            console.log("eeee", exist);
            if (exist) {
                dispatch(setUsernameError(true));
            } else {
                // call set name error action here with false
                dispatch(setUsernameError(false));
                dispatch(registerUser(user, navigate));
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container register-page flex flex-column flex-center'
        >
            <RegisterForm handleSubmit={handleSubmit} />
        </motion.div>
    );
};

export default Register;
