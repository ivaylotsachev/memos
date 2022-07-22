import { auth, database } from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import toonavatar from 'cartoon-avatar';

export const checkForExistingUsername = async (username) => {
    const querySnapshot = await getDocs(collection(database, 'usernames'));
    let exist = false;

    querySnapshot.forEach(doc => {
        doc.data().name.toLowerCase() === username.toLowerCase() && (exist = true);
    })

    return exist;
}

export const fbRegisterUser = (user) => {
    const { email, password } = user;

    console.log("user utils: fbRegisterUser", email, password)

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log('reg', user);
                resolve(user);
            })
            .catch(error => reject(error.message))
    })

}

export const fbUpdateUser = async (name) => {
    return new Promise((resolve, reject) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: toonavatar.generate_avatar()
        })
            .then(async () => {
                const currentUser = auth.currentUser;

                // store username in database
                await addDoc(collection(database, 'usernames'), { name });
                await setDoc(doc(database, 'users', `${currentUser.uid}`), {
                    databaseId: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName,
                    posts: [],
                    comments: [],
                    photoURL: currentUser.photoURL
                })

                resolve('updated')
            })
            .catch(error => reject({ error: error.message }))
    })
}