// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import api from "@/lib/api/userApi";
import { storeToken, getToken, removeToken } from "@/lib/storage";
import { IUser, IAuthContext } from "@/types/auth";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Load user on app start
  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        await refreshUser();
      } else {
        setLoading(false);
      }
    })();
  }, []);

  // 🔐 Login
  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await api.post("/auth/login", { email, password });
      const { token, user } = res.data;

      await storeToken(token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(user);
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 🚪 Logout
  const signOut = async () => {
    await removeToken();
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
  };

  // 🔄 Refresh user info
  const refreshUser = async () => {
    try {
      const token = await getToken();
      if (!token) return;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await api.get("/auth/me");
      setUser(res.data.user);
    } catch (err) {
      console.error("Session expired:", err);
      await signOut();
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signIn, signOut, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
