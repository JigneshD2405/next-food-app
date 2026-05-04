import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import Classes from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse through all our delicious meals shared by our community.",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const Page = () => {
  return (
    <>
      <header className={Classes.header}>
        <h1>
          Delicious meals, created <span className={Classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={Classes.cta}>
          <Link href="/meals/share">Share your Favorite Recipe</Link>
        </p>
      </header>
      <main className={Classes.main}>
        <Suspense fallback={<p className={Classes.loading}>Fetching delicious meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default Page;
