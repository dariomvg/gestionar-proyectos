import Link from "next/link";
import "@/styles/Btn-create.css";

export const BtnCreate = () => {
  return (
    <Link href="/nuevo" className="link-create">
      Nuevo proyecto
    </Link>
  );
};
