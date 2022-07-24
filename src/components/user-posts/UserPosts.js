import { useSelector } from "react-redux";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, database } from "../../firebase";

import PostsList from "../posts-list/PostList";

const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([]);
    const posts = useSelector((state) => state.posts.posts);
    const user = useSelector((state) => state.users.activeUser);

    useEffect(() => {
        if (auth.currentUser) {
            const postsRef = collection(database, "posts");
            const q = query(
                postsRef,
                where("userId", "==", auth.currentUser.uid)
            );

            const test = async () => {
                const querySnapshot = await getDocs(q);
                const userPosts = [];

                await querySnapshot.forEach((doc) => {
                    userPosts.push({
                        ...doc.data(),
                        databaseId: doc.id,
                    });
                });

                setUserPosts(userPosts);
            };

            test();
        }
    }, [user, posts]);
    return (
        <div className='page-container'>
            <PostsList posts={userPosts} />
        </div>
    );
};

export default UserPosts;
