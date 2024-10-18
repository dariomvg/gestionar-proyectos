import { HeaderProject } from "@/components/HeaderProject";
import { PropsLayoutId } from "@/types/types";
import "react-toastify/dist/ReactToastify.css";

export default function LayoutIdProyecto({ children, params }: PropsLayoutId) {
  return (
      <section>
        <HeaderProject id={params.id} />
        {children}
      </section>
  );
}
