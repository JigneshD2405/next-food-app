import { mealsProp } from "@/Types/meals";
import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw Error("Error Occurs in getting meals...");
  return db.prepare("SELECT * FROM meals").all() as mealsProp[];
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
