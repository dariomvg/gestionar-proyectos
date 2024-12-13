"use client";
import Link from "next/link";
import "../styles/Btn-create.css";

export const BtnCreate = (): JSX.Element => {
  return (
    <Link href="/nuevo" className="link-create">
      Crea un nuevo proyecto
    </Link>
  );
};
