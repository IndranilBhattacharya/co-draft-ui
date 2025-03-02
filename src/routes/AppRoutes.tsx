import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const DocumentsPage = lazy(() => import("../pages/DocumentsPage"));
const EditDocumentPage = lazy(() => import("../pages/EditDocumentPage"));

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/documents/edit/:id" element={<EditDocumentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
