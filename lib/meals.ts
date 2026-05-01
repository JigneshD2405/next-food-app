import { mealsProp } from "@/Types/meals";
import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw Error("Error Occurs in getting meals...");
  return db.prepare("SELECT * FROM meals").all() as mealsProp[];
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as mealsProp;
}

export async function saveMeal(meal: mealsProp) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = typeof meal.image === "string" ? meal.image.split(".").pop() : meal.image?.name.split(".").pop();

  const filename = `${meal.slug}.${extension}`;

  if (typeof meal.image === "string" || !meal.image) {
    throw new Error("Invalid image data");
  }

  const buffer = await meal.image.arrayBuffer();
  const stream = fs.createWriteStream(`public/images/${filename}`);
  stream.write(Buffer.from(buffer), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });
  meal.image = `/images/${filename}`;
  db.prepare(
    `
    INSERT INTO meals 
    (title,summary,instructions,creator,creator_email,slug,image)
    VALUES (
    @title, @summary, @instructions, @creator, @creator_email, @slug, @image
    )
  `,
  ).run(meal);
}
