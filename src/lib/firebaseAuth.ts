import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth"

export const firebaseAuthSignInPopup = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
        .then((result) => {
            console.log(result);
        }).catch((error) => {
            console.error(error)
        })
}

export const firebaseAuthSignOut = () => {
    signOut(auth).then(() => {
        console.log("sign out")
    }).catch((error) =>{
        console.log(error)
    })
}