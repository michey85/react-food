import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing';

import { MealList } from '../MealList';

describe('MealList', () => {
  it('should render correctly', () => {
    renderWithRouter(
      <MealList
        meals={[
          {
            strMeal: 'Cheesecake',
            idMeal: '123',
            strMealThumb: '/cheesecake.png',
          },
          {
            strMeal: 'Pancake',
            idMeal: '456',
            strMealThumb: '/pancake.png',
          },
        ]}
      />,
    );

    expect(screen.getByRole('list')).toMatchSnapshot();
  });
});
