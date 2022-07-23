import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostItem from "../post-item/PostItem";

const PostsList = ({ latets }) => {
    const posts = useSelector((state) => state.posts.posts);

    console.log("postlist: posts", posts);

    return (
        <div className='posts-list-container flex flex-wrap jcsb'>
            {posts.length &&
                posts.map((post) => (
                    <PostItem
                        key={post.databaseId}
                        post={post}
                        emphasis={true}
                    />
                ))}
        </div>
    );
};

export default PostsList;
