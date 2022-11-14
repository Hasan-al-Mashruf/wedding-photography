import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/Firebase.confiq';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const contextProvider = createContext();
const auth = getAuth(app)

const Context = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleLogin = provider => {
        return signInWithPopup(auth, provider);
    }

    const githubLogin = provider => {
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });

        return () => unsubscribe;
    }, [])

    const authInfo = { googleLogin, githubLogin, logOut, user }

    return (
        <contextProvider.Provider value={authInfo}>
            {children}
        </contextProvider.Provider>
    );
};

export default Context;