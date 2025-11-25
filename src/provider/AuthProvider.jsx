import React, { useState } from 'react';
import { AuthContext } from './authContext';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

        // sign in with google
    const googleProvider = new GoogleAuthProvider()
            const googleLogin = () => {
             return signInWithPopup(auth, googleProvider)
            }


    const authData = {
        user,
        setUser,
        googleLogin
    }
    return (
     <AuthContext value={authData}>
          {children}
     </AuthContext>
     );
};

export default AuthProvider;