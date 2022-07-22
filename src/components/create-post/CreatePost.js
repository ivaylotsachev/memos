import { motion } from 'framer-motion';
import CreatePostForm from '../form/CreatePostForm';

const CreatePost = () => {
    const handleSubmit = (post) => {
        console.log("Createpost handleSubmit", post);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container register-page flex flex-column flex-center'
        >
            <CreatePostForm
                title="Create post"
                handleSubmit={handleSubmit}
            />
        </motion.div>
    );
}

export default CreatePost;