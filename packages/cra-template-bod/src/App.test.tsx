import { screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import App from './App'
import { renderWithProviders } from './utils/test-utils'

describe('App', () => {
  test('should render correctly (snapshot)', () => {
    const { container } = renderWithProviders(<App />)

    expect(container).toMatchSnapshot()
  })

  test('Should render accessibility guidelines (AXE)', async () => {
    const { container } = renderWithProviders(<App />)

    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  test('renders learn React, Redux and Bod links', () => {
    renderWithProviders(<App />)

    expect(screen.getByText(/learn/iu)).toBeInTheDocument()
    expect(screen.getByText(/react/iu)).toBeInTheDocument()
    expect(screen.getByText(/redux/iu)).toBeInTheDocument()
    expect(screen.getByText(/bod/iu)).toBeInTheDocument()
  })
})
