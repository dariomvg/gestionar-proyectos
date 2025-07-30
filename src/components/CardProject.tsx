"use client";
import { PropsCard } from "@/types/types";
import "../styles/card-project.css";
import Link from "next/link";

export const CardProject = ({ item }: PropsCard) => {
  const { title, description, date_limit, id } = item;

  return (
    <div className="card-main" data-testid="card-main">
      <Link
        href={`proyectos/${id}`}
        className="link-card-project-main">
        {title}
      </Link>
      <p className="card-main-dates">Término: {date_limit}</p>
      <p className="card-main-description">{description}</p>
    </div>
  );
};
