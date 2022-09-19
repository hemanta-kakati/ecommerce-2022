import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/home" element={<Home />}>
          <Route path="shop" element={<div> shop page</div>} />
          <Route path="products" element={<div> products page</div>} />
          <Route path="support" element={<div> support page</div>} />
        </Route>
        <Route
          path="/*"
          element={
            <div className="container text-center">
              <h1>404 Error</h1>
              <p>Link not found</p>
              <Link to="/home" className="btn btn-primary">
                Back to home
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
