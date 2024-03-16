import { screen } from '@testing-library/react';

import { Header } from '../Header';
import { renderWithRouter } from '../../utils/testing';

describe('Header', () => {
  it('should render correctly', () => {
    renderWithRouter(<Header />);

    expect(screen.getByText('React Food')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
