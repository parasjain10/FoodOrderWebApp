import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samosa",
    description: "Street Food",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Kadhai Paneer",
    description: "Indian Specialist",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Momos",
    description: "Indian",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Dosa",
    description: "South Indian",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
