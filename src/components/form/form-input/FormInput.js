import { useEffect, useState } from "react";

const FormInput = ({
    type,
    name,
    value,
    label,
    changeHandler,
    errors,
    validator,
    errorMessage
}) => {
    return (
        <div className="input-container flex flex-column">
            <label htmlFor={name} className="mb-2">{ label }</label>
            {type !== 'textarea' && <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={e => changeHandler(e)}
                onBlur={validator}
                required
            />}
            {type === 'textarea' && <textarea
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={e => changeHandler(e)}
                onBlur={validator}
                required
            />}
            {errors[name] &&
                <p className="error-message mt-2 ml-3">{errorMessage}</p>}
        </div>
    )
}

export default FormInput;