import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AuthContext {
  token: string | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async () => {
    const token = 'mockToken';

    setToken(token);
    navigate('/home');
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value: AuthContext = {
    token,
    login: handleLogin,
    logout: handleLogout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
