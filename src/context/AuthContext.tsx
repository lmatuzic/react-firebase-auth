import { FC } from "react";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, User } from "firebase/auth";

type AuthContextProps = {
  user: User | null;
  authenticated: boolean;
  setUser: any;
  setAuthLoading: (authLoading: boolean) => void;
};

// Partial type - sets all properties of Type to optional
export const AuthContext = createContext<Partial<AuthContextProps>>({});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null as User | null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(user);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
