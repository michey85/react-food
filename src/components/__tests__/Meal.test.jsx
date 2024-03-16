import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../utils/testing';
import { Meal } from '../Meal';

describe('Meal', () => {
  it('should render correctly', () => {
    renderWithRouter(
      <Meal strMeal="Chees cake" idMeal="123" strMealThumb="/meal.png" />,
    );

    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
