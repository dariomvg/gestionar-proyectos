"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import "@/styles/header.css";
import iconMenu from "../assets/icons/menu.svg";
import iconGoogle from "../assets/icons/google.svg";
import { useState } from "react";
import { useAuth } from "@/contexts/ContextAuth";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const { user, login, logout } = useAuth();

  return (
    <header className={`header ${active ? "active" : ""}`}>
      <Logo />
      <img
        src={iconMenu.src}
        alt="menu icon"
        width={35}
        height={35}
        className="header-icon-menu"
        onClick={() => setActive(!active)}
      />
      <nav className="header-nav">
        {user.name ? (
          <>
            <Link href="/proyectos" className="nav-link">
              Proyectos
            </Link>
            <div className="container-user">
              <img
                src={user.avatar}
                alt="user avatar"
                width={30}
                height={30}
                className="nav-user-avatar"
              />
              <span className="nav-user-name">{user.name}</span>
            </div>
            <button className="nav-button" onClick={logout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <button className="nav-button" onClick={login}>
            Iniciar sesión
            <img
              src={iconGoogle.src}
              alt="icon google"
              width={20}
              height={20}
            />
          </button>
        )}
      </nav>
    </header>
  );
};
