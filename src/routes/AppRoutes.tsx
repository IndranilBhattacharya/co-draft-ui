import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout";
import AppRouterProps from "../interfaces/AppRouterProps";

const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const DocumentsPage = lazy(() => import("../pages/DocumentsPage"));
const EditDocumentPage = lazy(() => import("../pages/EditDocumentPage"));

export default function AppRoutes({
  isUserRegistered,
}: Readonly<AppRouterProps>) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isUserRegistered ? (
              <Navigate to="/documents" />
            ) : (
              <Navigate to="/register" />
            )
          }
        />

        <Route path="/register" element={<RegisterPage />} />

        <Route element={<Layout />}>
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/documents/edit/:id" element={<EditDocumentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
