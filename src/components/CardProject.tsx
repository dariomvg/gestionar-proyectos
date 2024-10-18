"use client";
import { PropsCard } from "@/types/types";
import { useRouter } from "next/navigation";
import "../styles/cardProject.css"; 

export const CardProject = ({ item }: PropsCard): JSX.Element => {
  const { title, description, date_limit, id } = item;
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`proyectos/${id}`);
  };

  return (
    <div className="card-main">
      <h2 className="card-main-title" onClick={handleNavigate}>
        {title}
      </h2>
      <strong className="card-main-dates">Término: {date_limit}</strong>
      <p className="card-main-description">{description}</p>
    </div>
  );
};
