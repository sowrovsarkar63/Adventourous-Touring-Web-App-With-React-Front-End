import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";

const useFirebase = () => {
    // set user state >>

    const [users, setuser] = useState({});
    const [isloading, setisloading] = useState(true);

    firebaseInitialize();
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();
    GoogleProvider.addScope("email");
    // handle google sign in .
    const SignInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvider);
    };

    // handle logout
    const HandleLogout = () => {
        signOut(auth).then(() => {
            setuser("");
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (users) => {
            if (users) {
                setuser(users);
            } else {
                setuser("");
            }
            setisloading(false);
        });
    }, []);

    return {
        users,
        SignInWithGoogle,
        HandleLogout,
        setuser,
        isloading,
    };
};

export default useFirebase;
