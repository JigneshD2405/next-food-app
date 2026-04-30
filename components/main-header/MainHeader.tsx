import LogoPng from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackGround from "./main-header-background";
import Classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackGround />
      <header className={Classes.header}>
        <Link className={Classes.logo} href="/">
          <Image src={LogoPng} alt="A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={Classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
