import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './containers';
import Logo from './logo.svg';

const App = (): JSX.Element => {
  return (
    <div className="text-center bg-white">
      <header className="app-header">
        <Logo className="app-logo" title="logo" />
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="app-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="app-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="app-link"
            href="https://sabertazimi.github.io/bod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bod App
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;
