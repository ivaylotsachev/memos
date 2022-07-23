import PostItem from "../post-item/PostItem";

const PostsList = ({ posts = [], type }) => {
    return (
        <div className={`posts-list-container flex flex-wrap jcsb`}>
            {posts.length &&
                posts.map((post) => (
                    <PostItem
                        key={post.databaseId}
                        post={post}
                        emphasis={true}
                        type={type}
                    />
                ))}
        </div>
    );
};

export default PostsList;
