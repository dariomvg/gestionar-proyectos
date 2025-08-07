import { HeaderProject } from "@/components/HeaderProject";
import "react-toastify/dist/ReactToastify.css";
import {ReactNode}from "react"

export default function LayoutIdProyecto({ children, params }: {children: ReactNode;
  params: {
    id: string;
  }}) {
  return (
      <section>
        <HeaderProject id={params.id} />
        {children}
      </section>
  );
}
