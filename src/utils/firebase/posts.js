import { auth, database } from "../../firebase";
import {
    addDoc,
    collection,
    doc,
    getDocs,
    limit,
    onSnapshot,
    orderBy,
    query,
    setDoc,
    Timestamp,
} from "firebase/firestore";
import moment from "moment";

export const fbCreatePost = (post) => {
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
            avatar: user.photoURL,
            createdAt,
            timestamp: Timestamp.fromDate(new Date(Date.now())),
            databaseId: postsRef.id,
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

export const fbGetLatestPosts = () => {
    const postsRef = collection(database, "posts");
    const q = query(postsRef, orderBy("timestamp", "desc"), limit(3));

    return new Promise(async (resolve, reject) => {
        const querySnapshot = await getDocs(q);
        const latestPosts = [];

        await querySnapshot.forEach((doc) => {
            latestPosts.push({
                ...doc.data(),
                databaseId: doc.id,
            });
        });

        resolve(latestPosts);
    });
};

export const fbGetAllPosts = () => {
    return new Promise(async (resolve, reject) => {
        const allPosts = [];
        const querySnapshot = await getDocs(collection(database, "posts"));

        querySnapshot.forEach((doc) =>
            allPosts.push({
                ...doc.data(),
                databaseId: doc.id,
            })
        );

        resolve(allPosts);
    });
};
