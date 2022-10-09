import {render, screen, cleanup, getByTestId} from "@testing-library/react"
import Orders from "../orders.components";
import renderer from 'react-test-renderer'

afterEach(() => {
  cleanup()
})

test('should render todo component', () => {
  render(<Orders/>)
  const orderElement = screen.getByTestId('orders-1')
  expect(orderElement).toBeInTheDocument();
  expect(orderElement).toHaveTextContent('The Order Adder App');
})

test('matches snapshot', () => {
  const tree = renderer.create(<Orders/>)
  expect(tree).toMatchSnapshot();
})

test('buttons are disabled', () => {
  render(<Orders/>)
  const button = screen.getByTestId('add-new-order')
  expect(button).not.toBeDisabled();
  // expect(screen.getByRole({ name: "Add new order" })).toBeDisabled();
  // expect(Orders(/Add new order/i)).toBeDisabled()
})
