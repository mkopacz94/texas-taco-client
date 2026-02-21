import api from '@/lib/axios';
import type { Account } from '@/types/auth/account';
import type { SignInResponse } from '@/types/auth/signInResponse';
import type { User } from '@/types/users/user';
import { useEffect, useState, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const whoAmIResponse = await api.get<Account>('/v1/auth/me');

        const userResponse = await api.get<User>(
          `/v1/users/for-account/${whoAmIResponse.data.accountId}`,
        );

        setLoggedUser(userResponse.data);
      } catch {
        setLoggedUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          setLoggedUser(null);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  const login = async (email: string, password: string) => {
    const signInResponse = await api.post<SignInResponse>('/v1/auth/sign-in', {
      email,
      password,
      requiredRole: import.meta.env.VITE_ROLE_TO_ACCESS,
    });

    const userResponse = await api.get<User>(
      `/v1/users/for-account/${signInResponse.data.accountId.value}`,
    );

    setLoggedUser(userResponse.data);

    console.log(loggedUser);
  };

  const logout = async () => {
    await api.post('/v1/auth/sign-out');
    setLoggedUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
