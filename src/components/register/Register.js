import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useValidate } from "../../hooks/useValidate";
import { checkForExistingUsername, registerUser } from "../../utils/firebase/usersUtils";

// styles
import "./Register.scss";

const Register = () => {
    const [nameError, setNameError] = useState(false);
    const [dbError, setDbError] = useState(false);
    const [values, errors, changeHandler, validator] = useValidate();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(errors).some(i => i)) return;

        await checkForExistingUsername(values.name)
            .then(data => setNameError(true))

        registerUser(values, setDbError, navigate)

    };

    return (
        <div className='page-container register-page flex flex-column flex-center'>
            <form className="register-container" onSubmit={handleSubmit}>
                <h1 className="form-title">register</h1>
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

                <div className='input-container flex flex-column'>
                    <label htmlFor='name' className="mb-2">Account name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        value={values.name}
                        onChange={changeHandler}
                        onBlur={validator}
                    />
                    {errors.name && !nameError && <p className="error-message mt-2 ml-3">Account name must be at least 3 characters!</p>}
                    {nameError && <p className="error-message mt-2 ml-3">Account name is already taken!</p>}
                </div>

                <button className='button button-success mt-3'>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
