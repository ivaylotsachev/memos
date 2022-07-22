import { useState } from "react";

export const useValidate = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        name: ""
    });

    const [errors, setErrors] = useState({});

    const validator = (e) => {
        console.log('validator', e.target.name);

        switch(e.target.name) {
            case 'email':
                validateEmail(values.email)
                    ? setErrors((errors) => ({ ...errors, email: false }))
                    : setErrors((errors) => ({ ...errors, email: true }));
                break;
            case 'password':
                validateLength(values.password, 6)
                    ? setErrors((errors) => ({ ...errors, password: false }))
                    : setErrors((errors) => ({ ...errors, password: true }));
                break;
            case 'name':
                validateLength(values.name, 3)
                    ? setErrors((errors) => ({ ...errors, name: false }))
                    : setErrors((errors) => ({ ...errors, name: true }));
                break;
            default:
                setErrors({})
        }
    };

    const changeHandler = (e) => setValues((oldValues) => (
        { ...oldValues, [e.target.name]: e.target.value }
    ));


    return [values, errors, changeHandler, validator];
};

const validateEmail = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
    } else {
        return false;
    }
};

const validateLength = (value, len) => value.length >= len;
