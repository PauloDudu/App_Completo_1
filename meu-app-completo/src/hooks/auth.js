import React, {
    createContext,
    useCallback,
    useState,
    useContext,
  } from 'react';
  
  import { api } from '../services/api';
  
  const AuthContext = createContext({});
  
  const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
      const user = localStorage.getItem('@DUDU:user');
  
      if (user) {
        return { user: JSON.parse(user) };
      }
  
      return {};
    });
  
    const signIn = useCallback(async ({ email, senha }) => {
      const response = await api.get('users');
      console.log("usuarios", response);
  
      const user = response.data.filter(data => {
        console.log("data", data.email, email);
        return (data.email === email && data.senha === senha);
      });
  
      console.log("user", user);
  
      if(user.length > 0){
        localStorage.setItem('@DUDU:user', JSON.stringify(user[0]));
        setData({ user: user[0] });
      }else{
        throw new Error('Usuário ou senha inválido');
      }
    }, []);
  
    const signOut = useCallback(() => {
      localStorage.removeItem('@DUDU:user');
  
      setData({});
    }, []);
  
    return (
      <AuthContext.Provider
        value={{ user: data.user, signIn, signOut }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  function useAuth() {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
  
  export { AuthProvider, useAuth };