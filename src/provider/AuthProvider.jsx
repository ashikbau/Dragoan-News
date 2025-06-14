import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signInWithFaceBook = () =>{
         
        return signInWithPopup(auth,faceBookProvider)
    }

    const signInWithGithub =()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

     const logOut = () => {
    return signOut(auth);
  };


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])




    const authInfo = {
        createUser ,
        setUser,
         loginUser,
         user,
         logOut,
         updateUser,
         signInWithGoogle,
          signInWithFaceBook,
          signInWithGithub,
    }

    return (
        <AuthContext value={authInfo}>
            {children}

        </AuthContext>
    );
};

export default AuthProvider;