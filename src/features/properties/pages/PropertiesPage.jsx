import React, { useState, useEffect } from "react";
import { getPropertiesWithImageByFilter } from "../services/propertiesService";
import "../style/PropertyPage.css";
import HeroWaveSection from "../../../component/HeroWaveSection/HeroWaveSection";
import Footer from "../../../component/Footer/Footer";
import useTranslation from "../../../hooks/useTranslation";
import Filters from "../components/Filters";
import Results from "../components/Results";

const PropertiesPage = () => {
  const { translation } = useTranslation();
  const [filters, setFilters] = useState({
    Name: "",
    Address: "",
    MinPrice: "",
    MaxPrice: "",
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const data = await getPropertiesWithImageByFilter({
        Name: filters.Name || null,
        Address: filters.Address || null,
        MinPrice: filters.MinPrice || null,
        MaxPrice: filters.MaxPrice || null,
      });

      const propertiesWithImages = data.map((item) => ({
        ...item.Property,
        Images: item.Images || [],
      }));

      setProperties(propertiesWithImages);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchProperties();
  };

  return (
    <>
      <HeroWaveSection />
      <div className="properties-page mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center my-8">
          {translation.propertiesPage.title}
        </h1>

        <div className="properties-container space-y-8">
          {/* Filtros */}
          <Filters
            filters={filters}
            handleInputChange={handleInputChange}
            handleFilterSubmit={handleFilterSubmit}
            translation={translation}
          />

          {/* Resultados */}
          <Results
            properties={properties}
            loading={loading}
            translation={translation}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertiesPage;
