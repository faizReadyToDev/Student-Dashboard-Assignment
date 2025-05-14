import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

export const LoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result
}


export const signOut = async () => {
    try {
        await auth.signOut();
        console.log("Signed out successfully.");
    } catch (error) {
        console.error("Error signing out:", error);
    }
};