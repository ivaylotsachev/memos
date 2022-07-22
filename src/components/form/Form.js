
import { NavLink } from "react-router-dom";
import { useValidate } from "../../hooks/useValidate";
import FormInput from "./form-input/FormInput";

const Form = ({type, title, handleSubmit}) => {
    const [values, errors, changeHandler, validator] = useValidate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).some(e => e)) return;
        handleSubmit(values);
    }

    return (
        <form
            className="form-container"
            onSubmit={onSubmit}>
                <h1 className="form-title mb-5">{title || 'No title'}</h1>

                {(type === 'login' || type === 'register') &&
                    <>
                        <FormInput
                            label={'email'}
                            type={'text'}
                            value={values.email}
                            errors={errors}
                            name={'email'}
                            changeHandler={changeHandler}
                            validator={validator}
                            errorMessage="Email is not valid"
                        />
                        <FormInput
                            label="Password"
                            type={'password'}
                            value={values.password}
                            errors={errors}
                            name={'password'}
                            changeHandler={changeHandler}
                            validator={validator}
                            errorMessage="Password must be at least 6 characters"
                        />
                    </>
                }

                {type === 'register' &&
                    <FormInput
                        label={'Account name'}
                        type={'text'}
                        value={values.name}
                        errors={errors}
                        name={'name'}
                        changeHandler={changeHandler}
                        validator={validator}
                        errorMessage="Name must be at least 3 characters"
                    />}

                <button className='button button-success mt-3'>
                    {type}
                </button>

                {type === 'login' &&
                    <div className="login-footer flex aic jcfe mt-4">
                        <p>Don`t have an account?</p>
                        <NavLink to="/register">
                            <h3 className="underlined ml-3 register-button">Register</h3>
                        </NavLink>
                    </div>}
            </form>
    )
}

export default Form