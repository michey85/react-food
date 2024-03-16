import { screen } from '@testing-library/react';

import { renderWithRouter } from './utils/testing';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div data-testid="router">{children}</div>,
}));
jest.mock('./pages/Home.jsx', () => ({
  Home: () => <div data-testid="home">Home</div>,
}));
jest.mock('./pages/About.jsx', () => ({
  About: () => <div data-testid="about">About</div>,
}));
jest.mock('./pages/Contact.jsx', () => ({
  Contact: () => <div data-testid="contact">Contact</div>,
}));
jest.mock('./pages/Category.jsx', () => ({
  Category: () => <div data-testid="category">Category</div>,
}));
jest.mock('./pages/NotFound.jsx', () => ({
  NotFound: () => <div data-testid="not-found">Not Found</div>,
}));
jest.mock('./pages/Recipe.jsx', () => ({
  Recipe: () => <div data-testid="recipe">Recipe</div>,
}));

import App from './App';

describe('App', () => {
  it('should render the home page', () => {
    renderWithRouter(<App />, { initialEntries: ['/'] });

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('should render the about page', () => {
    renderWithRouter(<App />, { initialEntries: ['/about'] });

    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  it('should render the contact page', () => {
    renderWithRouter(<App />, { initialEntries: ['/contacts'] });

    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  it('should render the category page', () => {
    renderWithRouter(<App />, { initialEntries: ['/category/Beef'] });

    expect(screen.getByTestId('category')).toBeInTheDocument();
  });

  it('should render the recipe page', () => {
    renderWithRouter(<App />, { initialEntries: ['/meal/1'] });

    expect(screen.getByTestId('recipe')).toBeInTheDocument();
  });

  it('should render the not found page', () => {
    renderWithRouter(<App />, { initialEntries: ['/unknown'] });

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
