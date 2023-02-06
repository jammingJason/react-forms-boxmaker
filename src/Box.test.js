import { render, screen } from '@testing-library/react';
import Box from './Box';
test('renders Box', () => {
  render(<Box />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
