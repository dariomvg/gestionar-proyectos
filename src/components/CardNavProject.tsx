"use client"
import { useState } from "react";
import iconOptions from "../assets/icons/options.svg";
import { OptionsProject } from "./OptionsProject";
import { useRouter } from "next/navigation";
import "../styles/card-nav-project.css";
import { PropsCard } from "@/types/types";

export const CardNavProject = ({item}: PropsCard): JSX.Element => {
  const [active, setActive] = useState(false); 
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`proyectos/${item.id}`);
  };

  return (
    <div className="container-card-project">
      <div className="card-project">
        <strong className="title-card-project" onClick={handleNavigate}>     
          {item.title}
          </strong>
        <img
          src={iconOptions.src}
          alt="options icon"
          width={20}
          height={20}
          className="icon-options"
          onClick={() => setActive(!active)}
        />
      </div>
      {active && <OptionsProject item={item}/>}
      
    </div>
  );
};
