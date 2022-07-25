import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
// components
import PostItem from "../post-item/PostItem";

const PostView = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const posts = useSelector((state) => state.posts.posts);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const selectedPost = posts.find((p) => p.databaseId === params.postId);

        if (selectedPost && Object.values(selectedPost).length) {
            setPost(selectedPost);
        }
    }, [posts]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className='page-container'
        >
            <PostItem post={post} type='single' />
        </motion.div>
    );
};

export default PostView;
