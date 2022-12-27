import React, {createContext, useContext, useEffect, useState} from 'react'
import { auth } from '../firebase';
import {onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider
} from 'firebase/auth'


// const provider = new GoogleAuthProvider();
// const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const user = result.user;
//       toast.success("Login successfully");
//       router("/");
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       toast.error(error.message);
//     });
// };
// const resetPassword = (e) => {
//   e.preventDefault();

//   sendPasswordResetEmail(auth, email)
//     .then(() => {
//       // Password reset email sent!
//       toast.success("Password reset email sent");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       toast.error(error.message);
//       // ..
//     });
// };

const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [user, setUser] = useState({}); 

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

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