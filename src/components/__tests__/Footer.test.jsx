import { screen, render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    render(<Footer />);

    expect(screen.getByRole('link')).toHaveTextContent('Repo');
  });
});
