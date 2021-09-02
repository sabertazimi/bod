import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
  expect(getByText(/react/i)).toBeInTheDocument();
  expect(getByText(/redux/i)).toBeInTheDocument();
  expect(getByText(/bod cli/i)).toBeInTheDocument();
});
