"use server";

import { mealsProp } from "@/Types/meals";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function invalidText(text: FormDataEntryValue | null) {
  return text == null || typeof text !== "string" || text.trim() === "";
}

export async function shareMeal(formData: FormData) {
  "use server";
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  if (
    invalidText(meal.title) ||
    invalidText(meal.summary) ||
    invalidText(meal.instructions) ||
    invalidText(meal.creator) ||
    invalidText(meal.creator_email) ||
    !meal.image ||
    (typeof meal.image !== "string" && meal.image.size === 0)
  ) {
    throw new Error("Invalid input");
  }

  await saveMeal(meal as mealsProp);
  redirect("/meals");
}
