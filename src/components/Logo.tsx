import Link from "next/link";
import "../styles/logo.css";

export const Logo = (): JSX.Element => {
  return (
    <Link href="/" className="link-logo">
      <h2 className="logo">
        <b className="logo-g">G</b>
        <b className="logo-p">P</b>
      </h2>
    </Link>
  );
};
