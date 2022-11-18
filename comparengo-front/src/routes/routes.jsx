import { Route, Routes } from "react-router-dom";
import Home from "../views/home";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Routing;