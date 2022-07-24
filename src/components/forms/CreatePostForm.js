import { NavLink } from "react-router-dom";
import { useValidate } from "../../hooks/useValidate";

const CreatePostForm = ({ type, title, handleSubmit }) => {
    const [values, errors, changeHandler, validator] = useValidate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).some((e) => e)) return;
        handleSubmit(values);
    };

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h1 className='form-title mb-5'>{title || "No title"}</h1>

            <div className='input-container flex flex-column'>
                <label htmlFor='email' className='mb-2'>
                    Title
                </label>
                <input
                    type='title'
                    name='title'
                    id='title'
                    value={values.title}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.title && (
                    <p className='error-message'>
                        Title must be at least 3 characters
                    </p>
                )}
            </div>

            <div className='input-container flex flex-column'>
                <label htmlFor='email' className='mb-2'>
                    Content
                </label>
                <textarea
                    rows={5}
                    type='content'
                    name='content'
                    id='content'
                    value={values.content}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.content && (
                    <p className='error-message'>
                        Content must be at least 20 characters
                    </p>
                )}
            </div>

            <div className='input-container flex flex-column'>
                <label htmlFor='email' className='mb-2'>
                    imageUrl
                </label>
                <input
                    type='photoUrl'
                    name='photoUrl'
                    id='photoUrl'
                    value={values.photoUrl}
                    onChange={changeHandler}
                    onBlur={validator}
                />
                {errors.photoUrl && (
                    <p className='error-message'>Invalid url</p>
                )}
            </div>

            <button className='button button-success mt-3'>Create</button>
        </form>
    );
};

export default CreatePostForm;
