import { screen, render } from '@testing-library/react';

import { NotFound } from '../NotFound';

describe('NotFound', () => {
  it('should render correctly', () => {
    render(<NotFound />);

    expect(screen.getByRole('heading')).toMatchSnapshot();
  });
});
