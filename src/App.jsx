import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "./Components/PageLoader";
import Footer from "./Components/Footer";
import LoginPage from "./Pages/LoginPage";
const Inputs = lazy(()=>import("./Pages/Inputs"))
const Buttons = lazy(() => import("./Pages/Buttons"));
const Cards = lazy(() => import("./Pages/Cards"));
const Home = lazy(() => import("./Pages/Home"));
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
