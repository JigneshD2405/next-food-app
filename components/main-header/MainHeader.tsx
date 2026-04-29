import LogoPng from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBackGround from "./main-header-background";
import Classes from "./main-header.module.css";

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
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/meals/share">Share Meal</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
