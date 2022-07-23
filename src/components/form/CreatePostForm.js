import { NavLink } from "react-router-dom";
import { useValidate } from "../../hooks/useValidate";
import FormInput from "./form-input/FormInput";

const CreatePostForm = ({type, title, handleSubmit}) => {
    const [values, errors, changeHandler, validator] = useValidate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (Object.values(errors).some(e => e)) return;
        handleSubmit(values)
    }

    return (
        <form
            className="form-container"
            onSubmit={onSubmit}>
            <h1 className="form-title mb-5">{title || 'No title'}</h1>
                <FormInput
                    label={'title'}
                    type={'text'}
                    value={values.title}
                    errors={errors}
                    name={'title'}
                    changeHandler={changeHandler}
                    validator={validator}
                    errorMessage="Title must be at least 3 characters"
                />
                <FormInput
                    label="Content"
                    type="textarea"
                    value={values.content}
                    errors={errors}
                    name="content"
                    changeHandler={changeHandler}
                    validator={validator}
                    errorMessage="Content must be at least 50 characters"
                />
                <FormInput
                    label="Post image url"
                    type="text"
                    value={values.photoUrl}
                    errors={errors}
                    name="photoUrl"
                    changeHandler={changeHandler}
                    validator={validator}
                    errorMessage="Invalid url"
                />

            <button className='button button-success mt-3'>
                Create
            </button>
        </form>
    )
}

export default CreatePostForm