import { auth, database } from "../../firebase";
import {
    addDoc,
    collection,
    doc,
    getDocs,
    onSnapshot,
    setDoc,
} from "firebase/firestore";
import moment from "moment";

export const fbCreatePost = (post) => {
    console.log("firebase post: createPost", post);

    return new Promise(async (resolve, reject) => {
        const user = auth.currentUser;
        const postsRef = collection(database, "posts");
        const createdAt = moment().format("MMMM Do YYYY, h:mm:ss a");

        await addDoc(postsRef, {
            ...post,
            views: 0,
            comments: [],
            displayName: user.displayName,
            userId: user.uid,
            photoUrl: user.photoURL,
            createdAt,
        }).then(() => resolve("success"));
    });
};

export const subscribeToPostsCollection = async (dispatch, action) => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(
            collection(database, "posts"),
            (snapshot) => {
                const dbPosts = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        databaseId: doc.id,
                    };
                });
                resolve(dbPosts);
            }
        );
    });
};
