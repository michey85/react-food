import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../../utils/testing';
import * as api from '../../api';

import { Home } from '../Home';

const apiSpy = jest.spyOn(api, 'getAllCategories');

describe('Home', () => {
  it('should render Home', async () => {
    apiSpy.mockResolvedValueOnce({
      categories: [
        {
          strCategory: 'First',
          idCategory: '1',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
        {
          strCategory: 'Second',
          idCategory: '2',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
        {
          strCategory: 'Third',
          idCategory: '3',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
      ],
    });

    renderWithRouter(<Home />);

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(await screen.findAllByRole('link')).toHaveLength(3);
  });

  it('should render Home with search', async () => {
    apiSpy.mockResolvedValueOnce({
      categories: [
        {
          strCategory: 'First',
          idCategory: '1',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
        {
          strCategory: 'Second',
          idCategory: '2',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
        {
          strCategory: 'Third',
          idCategory: '3',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
      ],
    });

    renderWithRouter(<Home />, {
      initialEntries: ['/?search=first'],
    });

    const preloader = screen.getByRole('progressbar');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(await screen.findAllByRole('link')).toHaveLength(1);
  });

  it('should render Home with search user interaction', async () => {
    apiSpy.mockResolvedValue({
      categories: [
        {
          strCategory: 'First',
          idCategory: '1',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
        {
          strCategory: 'Second',
          idCategory: '2',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
        {
          strCategory: 'Third',
          idCategory: '3',
          strCategoryThumb: 'Thumb',
          strCategoryDescription: 'Description',
        },
      ],
    });

    renderWithRouter(<Home />);

    const preloader = screen.getByRole('progressbar');
    const input = screen.getByRole('searchbox');

    expect(preloader).toBeInTheDocument();

    await waitForElementToBeRemoved(preloader);

    expect(await screen.findAllByRole('link')).toHaveLength(3);

    await userEvent.type(input, 'first');
    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findAllByRole('link')).toHaveLength(1);
  });
});
