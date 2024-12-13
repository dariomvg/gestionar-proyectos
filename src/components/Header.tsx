"use client";
import Link from "next/link";
import { Logo } from "./Logo";
import "../styles/header.css";
import iconMenu from "../assets/icons/menu.svg";
import iconGithubHeader from "../assets/icons/github.svg";
import { useState } from "react";

export const Header = (): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
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
        <Link href="/" className="nav-link">
          Príncipal
        </Link>
        <Link href="/proyectos" className="nav-link">
          Proyectos
        </Link>
        <a
          href="https://github.com/dariomvg/gestionar-proyectos"
          rel="noreferrer"
          target="_blank"
          className="nav-link-contact">
          <img
            src={iconGithubHeader.src}
            alt="github icon"
            width={25}
            height={25}
            className="nav-icon-github"
          />
        </a>
      </nav>
    </header>
  );
};
