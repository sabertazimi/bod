import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { create } from 'react-test-renderer';
import Counter from '../index';

describe('Counter', () => {
  test('should render correctly (snapshot)', () => {
    const mockClickHandler = jest.fn();

    const tree = create(
      <Counter
        count={0}
        incrementAmount={'2'}
        onIncrementAmountChange={mockClickHandler}
        onDecrement={mockClickHandler}
        onIncrement={mockClickHandler}
        onIncrementAsync={mockClickHandler}
        onIncrementByAmount={mockClickHandler}
        onIncrementIfOdd={mockClickHandler}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render accessibility guidelines (AXE)', async () => {
    const mockClickHandler = jest.fn();
    const { container } = render(
      <Counter
        count={0}
        incrementAmount={'2'}
        onIncrementAmountChange={mockClickHandler}
        onDecrement={mockClickHandler}
        onIncrement={mockClickHandler}
        onIncrementAsync={mockClickHandler}
        onIncrementByAmount={mockClickHandler}
        onIncrementIfOdd={mockClickHandler}
      />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
