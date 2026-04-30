/* eslint-disable @typescript-eslint/no-explicit-any */
import { mealsProp } from "@/Types/meals";
import classes from "./meals-grid.module.css";
import MealItem from "./meals-item";

interface MealsGridProps {
  meals: mealsProp[] | any;
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: any) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
