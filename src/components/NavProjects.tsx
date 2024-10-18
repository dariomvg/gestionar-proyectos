"use client"
import { Logo } from "./Logo";
import { CardNavProject } from "./CardNavProject";
import Link from "next/link";
import iconPlus from "../assets/icons/circle-plus.svg";
import iconBack from "../assets/icons/arrow-back.svg";
import "../styles/Nav-projects.css";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { ObjBaseType } from "@/types/types";

export const NavProjects = (): JSX.Element => {
        
  const {projects, handleViewCreate } = useHandleProjects(); 

  return (
    <aside className="aside-nav">
      <div className="aside-container-top">
        <Logo />
        <div className="aside-cont-title">
          <h4>Proyectos</h4>
          <img
            src={iconPlus.src}
            alt="plus icon"
            width={25}
            height={25}
            className="icon-plus"
            onClick={() => handleViewCreate()}
          />
        </div>
        <div className="aside-list-projects">
          {projects.length > 0 && projects.map((item: ObjBaseType) => <CardNavProject key={item.id} item={item} />)}
        </div>
      </div>
      <div className="aside-container-bottom">
        <img
          src={iconBack.src}
          alt="icon back"
          width={20}
          height={20}
          className="icon-container-bottom"
        />
        <Link href="/" className="link-container-bottom">
          Volver a príncipal
        </Link>
      </div>
    </aside>
  );
};
