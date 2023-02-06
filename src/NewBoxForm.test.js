import { render, screen, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
test('renders NewBoxForm', () => {
  render(<NewBoxForm />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

const createBox = () => {};

it('should add new item', function () {
  const { queryByText, getByLabelText, getByRole } = render(
    <NewBoxForm createBox={createBox} />
  );
  const height = getByLabelText('Box Height:');
  const width = getByLabelText('Box Width:');
  const btn = queryByText('Create Box');
  //   expect(queryByText('X')).not.toBeInTheDocument();
  fireEvent.change(height, { target: { value: 100 } });
  fireEvent.change(width, { target: { value: 100 } });
  fireEvent.click(btn);
  expect(getByRole('button')).toBeInTheDocument();
});
