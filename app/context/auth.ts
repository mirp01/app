import * as React from "react";

interface AuthContextType {
  user: string | null;
  signIn: () => void;
  signOut: () => void;
}

const defaultAuthContext: AuthContextType = {
  user: null,
  signIn: () => {},
  signOut: () => {},
};

export const AuthContext = React.createContext<AuthContextType>(defaultAuthContext);

export function AuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [user, setUser] = React.useState<string | null>(null);

  const authContext = React.useMemo<AuthContextType>(() => ({
    user,
    signIn: () => {
      setUser("Mirp");
    },
    signOut: () => {
      setUser(null);
    }
  }), [user]);

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  return React.useContext(AuthContext);
};