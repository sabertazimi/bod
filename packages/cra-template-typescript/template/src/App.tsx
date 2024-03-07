import Logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="text-center">
      <header className="app-header">
        <Logo className="app-logo" title="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
