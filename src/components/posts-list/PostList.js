import PostItem from "../post-item/PostItem";

const PostsList = ({ posts = [], type, postClickable }) => {
    console.log("postClickable", postClickable);
    return (
        <div
            className={`posts-list-container flex flex-wrap jcsb ${
                postClickable ? "pointer" : ""
            }`}
        >
            {posts.length &&
                posts.map((post) => (
                    <PostItem
                        key={post.databaseId}
                        post={post}
                        emphasis={true}
                        type={type}
                        clickable={postClickable}
                    />
                ))}
        </div>
    );
};

export default PostsList;
