import React from "react";
import { Carousel } from "flowbite-react"; // Para el carrusel de imágenes
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {

  const navigate = useNavigate(); // Hook para navegación

  const handleCardClick = () => {
    navigate(`/property/${property.Id}`); // Redirige a la página de detalles con el ID de la propiedad
  };

  return (
    <div 
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      onClick={handleCardClick}
    >
      {/* Carrusel de imágenes */}
      <div className="h-64 relative">
        <Carousel>
          {property.Images && property.Images.length > 0 ? (
            property.Images.map((image, index) => (
              <img
                key={index}
                src={image.File}
                alt={`${property.Name} - ${index + 1}`}
                className="object-cover w-full h-full"
              />
            ))
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
              <p>No hay imágenes disponibles</p>
            </div>
          )}
        </Carousel>
        {/* Botón de ícono en la esquina superior derecha */}
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 9.75l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {/* Información de la propiedad */}
      <div className="p-4">
        <div className="bg-purple-600 text-white text-center py-1 rounded-md mb-4">
          Presentada por Bricksave
        </div>
        <h5 className="text-lg font-bold mb-2">{property.Name}</h5>

        {/* Objetivo y renta */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">Objetivo</span>
          <span className="font-bold text-gray-800">
            ${property.Price.toLocaleString()}
          </span>
        </div>

        {/* Ubicación y fracciones disponibles */}
        <div className="text-sm text-gray-600">
          <p>{property.Address}</p>
          <p>
            {property.FractionsAvailable?.toLocaleString()} fracciones
            disponibles
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;