import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertiesPage from "../features/properties/pages/PropertiesPage";
import PropertyDetail from "../features/properties/pages/PropertyDetail"; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;