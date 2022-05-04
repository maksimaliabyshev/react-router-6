import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealsList from '../components/MealsList';
import Preloader from '../components/Preloader';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <>
            <button className="btn grey darken-2" onClick={() => navigate(-1)}>
                Go back
            </button>

            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
}

export default Category;
