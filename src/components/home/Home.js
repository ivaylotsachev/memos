import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { fetchPosts } from "../../redux/actions/postsAction";

const Home = () => {
    // constants
    const dispatch = useDispatch();

    // hooks
    useEffect(() => {
        dispatch(fetchPosts());
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
        </motion.div>
    );
};

export default Home;
