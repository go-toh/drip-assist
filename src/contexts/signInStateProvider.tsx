import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth"
import { auth } from "src/lib/firebase";

export type contextType = {
    user: User | null | undefined
}

const initialState: contextType = {
    user: undefined,
}

const SignInStateContext = createContext<contextType>(initialState);

export const useSignInState = () => useContext(SignInStateContext);

type Props = { children: ReactNode }

export const SignInStateProvider = ({ children }: Props) => {
    const [userState, setUserState] = useState<contextType>(initialState);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                console.log("onAuthChanged signIn");
                setUserState({user});
            } else {
                console.log("onAuthChanged not signIn");
                setUserState(initialState);
            }
        }); 
    }, []);

    return (
        <SignInStateContext.Provider value={ userState }>
            { children }
        </SignInStateContext.Provider>
    );
}
