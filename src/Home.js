import { useEffect, useState } from "react";
import { useValidate } from "./hooks/useValidate";
import toonavatar from 'cartoon-avatar'

const Home = () => {
    const [values, errors, changeHandler, validator] = useValidate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).some(i => i)) {
            return;
        }
    };

    return (
        <div className='page-container register-container flex flex-column'>
            <h1>register</h1>
            <div className='input-container flex flex-column'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.email && <p className="error-message">Invalid email</p>}
            </div>
            <div className='input-container flex flex-column'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={values.password}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.password && <p className="error-message">Password must be at least 6 characters.</p>}
            </div>
            <button className='button button-success mt-3' onClick={handleSubmit}>
                Register
            </button>
        </div>
    );
};

export default Home;
