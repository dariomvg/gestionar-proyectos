import ProjectsProvider from "@/contexts/ContextProjects";
import "@fontsource/montserrat";
import "@fontsource/poppins/900.css";
import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "@/contexts/ContextAuth";

export const metadata: Metadata = {
  title: "GP | gestión de proyectos",
  description:
    "Gestioná tus proyectos de múltiples formas y desde un solo lugar. Utiliza las herramientas que más se acomoden a tí y a tu proyecto",
  keywords: ["Proyectos", "Gestionar", "Herramientas"],
  creator: "Dario Martinez",
  icons: {
    icon: "./logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <ProjectsProvider>{children}</ProjectsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
