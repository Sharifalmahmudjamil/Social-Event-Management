/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider= new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const logout=()=>{
        return signOut(auth);
    }
    
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            console.log("user in the auth state changed",currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        googleSignIn,
        createUser,
        signIn,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;