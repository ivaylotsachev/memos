import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { motion } from "framer-motion";
// styles
import "./PostItem.scss";

const PostItem = ({ post, type, emphasis, clickable }) => {
    const {
        title,
        content,
        databaseId,
        displayName,
        avatar,
        createdAt,
        photoUrl,
    } = post;

    const navigate = useNavigate();

    const handleClick = () => {
        clickable && navigate(`/posts/${databaseId}`);
    };

    const postClassname = classNames({
        "post-item flex mb-3": true,
        emphasis: emphasis,
        single: type && type === "single",
        latest: type && type === "latest",
    });

    return (
        <div className={postClassname} onClick={handleClick}>
            <div className='post-image-container'>
                <img src={photoUrl} alt='' />
            </div>
            <div className='post-content flex flex-column p-3'>
                <h2 className=''>{title}</h2>
                <p className='content my-3'>{content}</p>
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
