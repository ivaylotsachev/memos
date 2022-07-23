import "./PostItem.scss";

const PostItem = ({ post, type, emphasis }) => {
    const {
        title,
        content,
        databaseId,
        displayName,
        avatar,
        createdAt,
        photoUrl,
    } = post;

    console.log(post);

    return (
        <div
            className={`post-item flex mb-3 ${
                type === "latest" ? "latest" : null
            } ${emphasis ? "emphasis" : null}`}
        >
            <div className='post-image-container'>
                <img src={photoUrl} alt='' />
            </div>
            <div className='post-content p-3'>
                <h2 className='mb-2'>{title}</h2>
                <p className='content'>{content}</p>
                <div className='post-footer mt-3 flex'>
                    <div className='avatar-container'>
                        <img src={avatar} alt='' />
                    </div>
                    <div className='ml-3'>
                        <p className='post-author'>{displayName}</p>
                        <p className='post-date'>{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
