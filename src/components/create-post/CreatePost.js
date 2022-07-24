import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fbCreatePost } from "../../utils/firebase/posts";
import CreatePostForm from "../forms/CreatePostForm";

const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = (post) => {
        fbCreatePost(post).then((data) => {
            console.log("create post", data);
            navigate("/");
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container register-page flex flex-column flex-center'
        >
            <CreatePostForm title='Create post' handleSubmit={handleSubmit} />
        </motion.div>
    );
};

export default CreatePost;
