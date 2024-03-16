import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from '../Search';

describe('Search', () => {
  it('should render correctly', () => {
    render(<Search />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Search');
  });

  it('should handle input change', async () => {
    render(<Search />);

    const input = screen.getByRole('searchbox');
    await userEvent.type(input, 'test');

    expect(input.value).toBe('test');
  });

  it('should handle form submit', async () => {
    const onSubmit = jest.fn();
    render(<Search cb={onSubmit} />);

    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'test');
    await userEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith('test');
  });

  it('should handle "Enter" key press', async () => {
    const onSubmit = jest.fn();
    render(<Search cb={onSubmit} />);

    const input = screen.getByRole('searchbox');
    await userEvent.type(input, 'test{enter}');

    expect(onSubmit).toHaveBeenCalledWith('test');
  });
});
