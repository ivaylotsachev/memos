import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchLatestPosts, fetchPosts } from "../../redux/actions/postsAction";
// components
import PostsList from "../posts-list/PostList";

const Home = () => {
    // constants
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const latestPosts = useSelector((state) => state.posts.latestPosts);

    // hooks
    useEffect(() => {
        dispatch(fetchPosts());
        dispatch(fetchLatestPosts());
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='page-container'
        >
            <div className='home-head-section jcfs'>
                <h1 className='page-title'>Memos</h1>
                <h4 className='page-subtitle'>Best place to share memories!</h4>
            </div>

            <h2 className='my-4'>Latest</h2>
            <PostsList posts={latestPosts} type='latest' />

            <h2 className='mt-5 mb-3'>All posts</h2>
            <PostsList posts={posts} />
        </motion.div>
    );
};

export default Home;
