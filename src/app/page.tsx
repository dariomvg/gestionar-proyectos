import CardHome from "@/components/CardHome";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import "./home.css";
import { details } from "@/libs/detailsMain";

export default function Home() {
  return (
    <main className="wrapper-main">
      <Header />
      <section className="section-main">
        <div className="section-main-wrapper">
          <div className="section-main-details">
            <h1 className="section-main-title">
              Organiza tus <b className="b-prim">proyectos</b> de forma <b className="b-sub">fácil</b> y con múltiples
              <b className="b-sub"> herramientas </b>, todo desde un mismo lugar
            </h1>
            <Link href="/proyectos" className="section-main-link">
              Comenzar
            </Link>
          </div>
        </div>
      </section>
      <section className="section-cards-details">
        {details.map((item) => (
          <CardHome key={item.id} item={item} />
        ))}
      </section>
      <Footer />
    </main>
  );
}
