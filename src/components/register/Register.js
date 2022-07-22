import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { checkForExistingUsername } from "../../utils/firebase/users";
import { registerUser } from "../../redux/actions/usersAction";
import Form from "../form/Form";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [nameError, setNameError] = useState(false);

    const handleSubmit = async (user) => {

        console.log("register component", user);

        await checkForExistingUsername(user.name)
            .then(exist => {
                if (exist) {
                    setNameError(true)
                } else {
                    setNameError(false);
                    dispatch(registerUser(user, navigate));
                }
            })
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container register-page flex flex-column flex-center'
        >
            <Form
                title="Register"
                type="register"
                handleSubmit={handleSubmit}
                nameError={nameError}
            />
        </motion.div>
    );
};

export default Register;
