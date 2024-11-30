import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import { getPropertiesWithImageByFilter } from "../services/propertiesService";
import "../style/PropertyPage.css"; // Importa el CSS
import HeroWaveSection from "../../../component/HeroWaveSection/HeroWaveSection";
import Footer from "../../../component/Footer/Footer";
import useTranslation from "../../../hooks/useTranslation";

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
  const [modalVisible, setModalVisible] = useState(false);

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
      <div className="properties-page">
        <h1 className="text-4xl font-bold text-gray-800 text-center my-8">
          {translation.propertiesPage.title}
        </h1>

        <div className="properties-container">
          {/* Filtros */}
          <div className="filters">
            <form className="filters-form" onSubmit={handleFilterSubmit}>
              <div className="form-group">
                <label htmlFor="Name">{translation.propertiesPage.filters.name}</label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  value={filters.Name}
                  onChange={handleInputChange}
                  placeholder={translation.propertiesPage.filters.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Address">{translation.propertiesPage.filters.address}</label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  value={filters.Address}
                  onChange={handleInputChange}
                  placeholder={translation.propertiesPage.placeholders.address}
                />
              </div>

              <div className="form-group">
                <label htmlFor="MinPrice">{translation.propertiesPage.filters.minPrice}</label>
                <input
                  type="number"
                  id="MinPrice"
                  name="MinPrice"
                  value={filters.MinPrice}
                  onChange={handleInputChange}
                  placeholder={translation.propertiesPage.placeholders.minPrice}
                />
              </div>

              <div className="form-group">
                <label htmlFor="MaxPrice">{translation.propertiesPage.filters.maxPrice}</label>
                <input
                  type="number"
                  id="MaxPrice"
                  name="MaxPrice"
                  value={filters.MaxPrice}
                  onChange={handleInputChange}
                  placeholder={translation.propertiesPage.placeholders.maxPrice}
                />
              </div>

              <button type="submit" className="filter-button">
                {translation.propertiesPage.filters.filterButton}
              </button>
            </form>
          </div>

          {/* Resultados */}
          <div className="properties-grid">
            {loading ? (
              <div role="status" className="loading-spinner">
                <svg
                  aria-hidden="true"
                  className="spinner"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              properties.map((property) => (
                <div key={property.Id}>
                  <PropertyCard property={property} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertiesPage;
