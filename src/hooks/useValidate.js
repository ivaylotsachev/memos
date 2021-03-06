import { useState } from "react";

export const useValidate = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        name: "",
        title: "post title",
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        photoUrl: "https://picsum.photos/600/300",
    });

    const [errors, setErrors] = useState({});

    const validator = (e) => {
        switch (e.target.name) {
            case "email":
                validateEmail(values.email)
                    ? setErrors((errors) => ({ ...errors, email: false }))
                    : setErrors((errors) => ({ ...errors, email: true }));
                break;
            case "password":
                validateLength(values.password, 6)
                    ? setErrors((errors) => ({ ...errors, password: false }))
                    : setErrors((errors) => ({ ...errors, password: true }));
                break;
            case "name":
                validateLength(values.name, 3)
                    ? setErrors((errors) => ({ ...errors, name: false }))
                    : setErrors((errors) => ({ ...errors, name: true }));
                break;
            case "title":
                validateLength(values.title, 3)
                    ? setErrors((errors) => ({ ...errors, title: false }))
                    : setErrors((errors) => ({ ...errors, title: true }));
                break;
            case "content":
                validateLength(values.content, 50)
                    ? setErrors((errors) => ({ ...errors, content: false }))
                    : setErrors((errors) => ({ ...errors, content: true }));
                break;
            case "photoUrl":
                validateUrl(values.photoUrl)
                    ? setErrors((errors) => ({ ...errors, photoUrl: false }))
                    : setErrors((errors) => ({ ...errors, photoUrl: true }));
                break;
            default:
                setErrors({});
        }
    };

    const changeHandler = (e) =>
        setValues((oldValues) => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));

    return [values, errors, changeHandler, validator];
};

const validateEmail = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
    } else {
        return false;
    }
};

const validateUrl = (urlString) => {
    const urlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // validate protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
};

const validateLength = (value, len) => value.length >= len;
