"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { ContextAuthTypes } from "@/types/types";
import { supabase } from "@/supabase/supabase";
import { obj_user } from "@/libs/user";

const ContextAuth = createContext<ContextAuthTypes | null>(null);

export const useAuth = (): ContextAuthTypes => {
  const context = useContext(ContextAuth);
  if (!context) throw new Error("Contexto con alcanze insuficiente");
  return context;
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(obj_user);

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error al iniciar sesión", error);
    } else {
      console.log("Iniciaste sesión", data);
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error);
    } else {
      setUser(obj_user);
      console.log("Logout successful");
    }
  };

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser({
          user_id: session.user.id,
          email: session.user.email,
          avatar: session.user.user_metadata.avatar_url,
          name:
            session.user.user_metadata.full_name ||
            session.user.user_metadata.name ||
            "",
        });
      }
    };
    getSession();
  }, []);

  return (
    <ContextAuth.Provider value={{ user, login, logout }}>
      {children}
    </ContextAuth.Provider>
  );
}
