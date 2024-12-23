"use client";
import { Logo } from "./Logo";
import { CardNavProject } from "./CardNavProject";
import Link from "next/link";
import iconPlus from "../assets/icons/circle-plus.svg";
import iconBack from "../assets/icons/arrow-back.svg";
import "../styles/Nav-projects.css";
import { useHandleProjects } from "@/contexts/ContextProjects";
import { ObjBaseType } from "@/types/types";
import { useRouter } from "next/navigation";

export const NavProjects = (): JSX.Element => {
  const { projects, deleteProject } = useHandleProjects();
  const router = useRouter();

  const createProject = () => {
    router.push("/nuevo");
  };

  const viewProject = (id: number) => {
    router.push(`/vista/proyecto/${id}`);
  };

  const removeProject = (id: number) => {
    deleteProject(id);
  };

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
            onClick={createProject}
          />
        </div>
        <div className="aside-list-projects">
          {projects.length > 0 &&
            projects.map((item: ObjBaseType) => (
              <CardNavProject
                key={item.id}
                item={item}
                viewProject={viewProject}
                removeProject={removeProject}
              />
            ))}
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
