import {createContext, useEffect, useState} from "react";
import app from "../firebase/firebase.config.js";
import {getAuth, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import PropTypes from "prop-types";

import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update user info
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login with Google
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Login with GitHub
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser && !user) return;
            const userEmail = currentUser?.email || user?.email || '';
            const loggedUser = { email: userEmail };

            setUser(currentUser);
            console.log(currentUser);

            setLoading(false);

            try {
                if (currentUser) {
                    axios.post('https://car-doctor-api.vercel.app/jwt', loggedUser, { withCredentials: true }).then();
                } else {
                    axios.post('https://car-doctor-api.vercel.app/logout', loggedUser, { withCredentials: true }).then();
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
        return () => unsubscribe();
    }, [user]);


    const authInfo = { user, loading, createUser, updateUser, signIn, signInWithGoogle, signInWithGithub, logOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;
