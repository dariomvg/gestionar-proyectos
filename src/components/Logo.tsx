import Link from "next/link";
import "@/styles/Logo.css";

export const Logo = () => {
  return (
    <Link href="/" className="link-logo">
      <h2 className="logo">
        <b className="logo-g">G</b>
        <b className="logo-p">P</b>
      </h2>
    </Link>
  );
};
