import toonavatar from 'cartoon-avatar';
import { auth, database } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';

export const registerUser = (user, setDbError, navigate) => {
    const { email, password, name } = user;
    console.log(auth.currentUser)
    createUserWithEmailAndPassword(auth, email, password)
        .then( () => {
            updateUserProfile(name);
            navigate && navigate("/")
        })
        .catch(error => {
            let msg = error.message.includes("email") ? "Email already in use!" : error.message;
            setDbError && setDbError(msg);
        })
}

export const checkForExistingUsername = async (username) => {
    const querySnapshot = await getDocs(collection(database, 'usernames'));
    let exist = false;

    querySnapshot.forEach(doc => {
        doc.data().name.toLowerCase() === username.toLowerCase() && (exist = true);
    })

    return exist;
}

export const updateUserProfile = (name ) => {
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
        })
}