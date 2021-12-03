import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import App from './App';
import store from './stores';

describe('App', () => {
  test('should render correctly (snapshot)', () => {
    const tree = create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders learn React, Redux and Bod links', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/learn/i)).toBeInTheDocument();
    expect(screen.getByText(/react/i)).toBeInTheDocument();
    expect(screen.getByText(/redux/i)).toBeInTheDocument();
    expect(screen.getByText(/bod/i)).toBeInTheDocument();
  });
});
