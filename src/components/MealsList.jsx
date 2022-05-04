import Meal from './Meal';
function MealsList({ meals = {} }) {
    return (
        <div className="list">
            {meals.map((meal, index) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}

export default MealsList;
