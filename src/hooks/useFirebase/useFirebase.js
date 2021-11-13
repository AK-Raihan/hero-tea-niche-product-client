import React, { useEffect, useState } from 'react';
import initializeFirebase from './../../Pages/Login/Login/Firebase/firebase.init';
import { getAuth, 
    createUserWithEmailAndPassword ,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    signOut
    } from "firebase/auth";

    initializeFirebase()

const useFirebase = () => {
    const[user, setUser]=useState({});
    const[authError, setAuthError]=useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    // register
    const registerUser = (email, password, displayName, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName, password };
                setUser(newUser);
                // save user to the database
                saveUser(email, displayName);
                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: displayName
                  }).then(() => {
                  }).catch((error) => {
                  });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    // login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // google login
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser( result.user);
                
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // check admin
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])


    // logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            
        }).catch((error) => {
            
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser =(email, displayName)=>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then()

    }


    return {
        user,
        admin,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        authError,
        isLoading
    }
};

export default useFirebase;