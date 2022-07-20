import { useState, useEffect } from "react";

export const useValidate = () => {
    const [values, setValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

    const validator = (e) => {
        switch(e.target.name) {
            case 'email':
                validateEmail(values.email)
                    ? setErrors((errors) => ({ ...errors, email: false }))
                    : setErrors((errors) => ({ ...errors, email: true }));
                break;
            case 'password':
                validatePassword(values.password)
                    ? setErrors((errors) => ({ ...errors, password: false }))
                    : setErrors((errors) => ({ ...errors, password: true }));
                break;
            default:
                setErrors({})
        }
    };

    const changeHandler = (e) => {
        setValues((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
    };

    return [values, errors, changeHandler, validator];
};

const validateEmail = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
    } else {
        return false;
    }
};

const validatePassword = (value) => value.length >= 6;
