import { NavLink } from "react-router-dom";
import { useValidate } from "../../hooks/useValidate";
import { useSelector } from "react-redux";

const RegisterForm = ({ handleSubmit }) => {
    const [values, errors, changeHandler, validator] = useValidate();
    const registerError = useSelector((state) => state.form.registerError);

    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).some((e) => e)) return;
        handleSubmit(values);
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h1 className='form-title mb-5'>Register</h1>

            <div className='input-container flex flex-column'>
                <label htmlFor='email' className='mb-2'>
                    Email
                </label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.email && <p className='error-message'>Invalid email</p>}
            </div>

            <div className='mt-4 input-container flex flex-column'>
                <label htmlFor='password' className='mb-2'>
                    Password
                </label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={values.password}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.password && (
                    <p className='error-message'>
                        Password must be at least 6 characters
                    </p>
                )}
            </div>

            <div className='mt-4 input-container flex flex-column'>
                <label htmlFor='password' className='mb-2'>
                    Account name
                </label>
                <input
                    type='name'
                    name='name'
                    id='name'
                    value={values.name}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.name && (
                    <p className='error-message'>
                        Account name must be at least 3 characters
                    </p>
                )}
            </div>

            {registerError && (
                <div className='input-container'>
                    <p className='error-message'>
                        {registerError.split("Firebase: ")[1]}
                    </p>
                </div>
            )}

            <button className='button button-success mt-3'>Register</button>

            {/* <div className='login-footer flex aic jcfe mt-4'>
                <p>Don`t have an account?</p>
                <NavLink to='/register'>
                    <h3 className='underlined ml-3 register-button'>
                        Register
                    </h3>
                </NavLink>
            </div> */}
        </form>
    );
};

export default RegisterForm;
