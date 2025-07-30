"use client";
import Link from "next/link";
import "../styles/btn-create.css";

export const BtnCreate = () => {
  return (
    <Link href="/nuevo" className="link-create">
      Nuevo proyecto
    </Link>
  );
};
