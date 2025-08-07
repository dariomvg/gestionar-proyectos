"use client";
import iconGoogle from "@/assets/icons/google.svg";
import "./register.css";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/ContextAuth";

export default function Register() {
  const { user, login } = useAuth();
  const router = useRouter();

  if (user?.name) {
    router.push("/");
  }
  return (
    <main className="main-register">
      <button className="button-register" onClick={login}>
        <img src={iconGoogle.src} alt="icon google" width="30" height="30" />
        Iniciar sesión con Google
      </button>
    </main>
  );
}
