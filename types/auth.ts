// src/types/auth.ts
export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface IAuthContext {
  user: IUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
}