import {createContext, useEffect, useState} from "react";
import app from "@/config/firebase.js";
import axios from "axios";
import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update User Info
    const updateUser = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    // User Login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Login with GitHub
    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth).then(() => setUser(null));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            const email = currentUser.email || user.email;
            const loggedUser = {email};

            try {
                if (currentUser) {
                    axios.post('https://food-hub-api-orpin.vercel.app/jwt', loggedUser, {withCredentials: true});
                } else {
                    axios.post('https://food-hub-api-orpin.vercel.app/logout', loggedUser, {withCredentials: true});
                }
            } catch (e) {
                console.error('Error:', e.message);
            }
        });
        return () => unsubscribe();
    }, [user]);

    const value = {user, loading, createUser, updateUser, signIn, signInWithGoogle, signInWithGithub, logOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;