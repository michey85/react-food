import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testing';

import { CategoryItem } from '../CategoryItem';

describe('CategoryItem', () => {
  it('should render correctly', () => {
    renderWithRouter(
      <CategoryItem
        strCategory="Beef"
        strCategoryThumb="https://www.themealdb.com/images/category/beef.png"
        strCategoryDescription="Beef is the culinary name for meat from cattle, particularly skeletal muscle."
      />,
    );

    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
