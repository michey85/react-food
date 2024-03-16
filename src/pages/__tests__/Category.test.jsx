import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Category } from '../Category';
import { renderWithRouter } from '../../utils/testing';
import * as api from '../../api';

const apiSpy = jest.spyOn(api, 'getFilteredCategory');

describe('Category', () => {
  it('should render correctly and show preloader when no meals', async () => {
    apiSpy.mockResolvedValueOnce({ meals: [] });

    renderWithRouter(<Category />);

    expect(await screen.findByRole('button')).toBeInTheDocument();
    expect(await screen.findByRole('progressbar')).toBeInTheDocument();
  });

  it('should render meals', async () => {
    apiSpy.mockResolvedValueOnce({
      meals: [
        { idMeal: '1', strMeal: 'First' },
        { idMeal: '2', strMeal: 'Second' },
      ],
    });

    renderWithRouter(<Category />);

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(await screen.findByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
