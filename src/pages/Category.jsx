import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { MealList } from "../components/MealList";
import { Preloader } from "../components/Preloader";

function Category() {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);
	const { goBack } = useHistory();

	useEffect(() => {
		getFilteredCategory(name).then((data) => setMeals(data.meals));
	}, [name]);

	return (
		<>
			<button type='button' className='btn' onClick={goBack}>
				Go Back
			</button>
			{!meals.length ? <Preloader /> : <MealList meals={meals} />}
		</>
	);
}

export { Category };
