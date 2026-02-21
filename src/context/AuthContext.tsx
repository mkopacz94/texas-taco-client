import { createContext } from 'react';
import type { User } from '@/types/users/user';

export interface AuthContextProps {
  loggedUser: User | null | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  loggedUser: null,
  login: async () => {},
  logout: async () => {},
});
