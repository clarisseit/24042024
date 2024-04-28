import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tour from "./pages/Tour";
import SingleTour from "./pages/SingleTour";
import Login from "./pages/Login";
import { tours } from "./utils/data";
import { createContext, useState } from "react";
import "./App.css";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export const AppContext = createContext();

function App() {
  const loggedUser = {
    name: "Robert",
  };
  const [toursData] = useState(tours);

  let users = [];
  let blogs = [];

  return (
    <>
      <AppContext.Provider value={{ toursData, loggedUser, users, blogs }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<h1>Home</h1>} />
              <Route path="/tours" element={<Tour />} />
              <Route path="/tours/:tourId" element={<SingleTour />} />
              <Route
                path="*"
                element={
                  <div>
                    <h1>Page not found</h1>
                    <Link to="/">Go back to home</Link>
                  </div>
                }
              ></Route>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
