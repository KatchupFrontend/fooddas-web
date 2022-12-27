import React, {createContext, useContext, useEffect, useState} from 'react'
import { auth , db} from '../firebase';
import {onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";



const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [user, setUser] = useState({}); 
     const provider = new GoogleAuthProvider();
     


     const signup = async (email, password) => {
        
            await createUserWithEmailAndPassword(auth, email, password
            );
            await setDoc(doc(db, "users", email), {
                orderedItems: [],
              });
    
    }
//    function signup(email, password) {
//      createUserWithEmailAndPassword(auth, email, password);
//      setDoc(doc(db, "users", email), {
//        orderedItems: [],
//      });
//    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    function signInWithGoogle(){
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)  
        });
        return unsubscribe;
    }
    , []);


    return (
        <AuthContext.Provider value={{user, signup, login, logout, resetPassword, signInWithGoogle}}>
            {children}
        </AuthContext.Provider>
    )

}

export function UserAuth(){
    return useContext(AuthContext)
}


// const AuthContext = () => {
//   return (
//     <div>AuthContext</div>
//   )
// }

// export default AuthContext