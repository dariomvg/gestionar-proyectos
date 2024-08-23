import { HeaderProject } from "@/components/HeaderProject";
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutIdProyecto({ children, params }) {
  return (
    <section>
      <HeaderProject id={params.id} />
      {children}
    </section>
  );
}
