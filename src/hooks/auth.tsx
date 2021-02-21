import React, { createContext, useCallback, useContext, useState } from 'react';

interface IUser {
  id: string;
  email: string;
  name: string;
  avatar_url: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

/* interface ISignInCredentials {
  email: string;
  password: string;
} */

interface IAuthContextData {
  user: IUser;
  signIn(): void;
  signOut(): void;
}

const staticUser: IUser = {
  id: 'id01',
  email: 'johndoe@example.com',
  name: 'John Doe',
  avatar_url: 'random url',
};

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(() => {
    const token = localStorage.getItem('@Quizzes:token');
    const user = localStorage.getItem('@Quizzes:user');

    if (token && user) {
      // HEADER AUTHORIZATION API

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(() => {
    localStorage.setItem('@Quizzes:token', 'token');
    localStorage.setItem('@Quizzes:user', JSON.stringify(staticUser));

    setState({
      token: 'token',
      user: staticUser,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Quizzes:token');
    localStorage.removeItem('@Quizzes:user');

    setState({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  return context;
}
