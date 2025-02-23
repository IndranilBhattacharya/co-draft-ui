import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import DocumentPage from "../pages/DocumentPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/document/:id" element={<DocumentPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
