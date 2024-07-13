import React from "react";
import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { renderComponent } from "./router/route";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("/home")}> Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/about")}>About</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer>
      <p>© 2024 My Website</p>
    </footer>
  );
};

const App: React.FC = () => {
  const location = useLocation();
  const Component = renderComponent(location?.pathname);

  return (
    <div className="app">
      <Header />
      <main className="main-content">{Component}</main>
      <Footer />
    </div>
  );
};

export default App;
