// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { RootRoute } from "./routes/RootRoute";
// const router = createBrowserRouter([RootRoute]);
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <div className="container m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
