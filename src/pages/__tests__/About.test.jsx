import { screen, render } from '@testing-library/react';

import { About } from '../About';

describe('About', () => {
  it('should render correctly', () => {
    render(<About />);

    expect(screen.getByRole('heading')).toMatchSnapshot();
  });
});
