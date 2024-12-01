import React from "react";
import { Carousel } from "flowbite-react"; // Para el carrusel de imágenes
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate(); // Hook para navegación

  const handleCardClick = (e) => {
    if (!e.defaultPrevented) {
      navigate(`/property/${property.Id}`); // Redirige a la página de detalles con el ID de la propiedad
    }
  };

  const handleCarouselClick = (e) => {
    e.preventDefault(); // Previene la redirección
    e.stopPropagation(); // Evita que el clic se propague al contenedor principal
  };

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out pb-4"
      onClick={handleCardClick}
    >
      {/* Carrusel de imágenes */}
      <div className="h-64 relative" onClick={handleCarouselClick}>
        <Carousel indicators={false} leftControl="" rightControl="" slide={false}>
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
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-purple-600"
          >
            <path
              d="M14 21.0001V15.0001H10V21.0001M19 9.77818V16.2001C19 17.8802 19 18.7203 18.673 19.362C18.3854 19.9265 17.9265 20.3855 17.362 20.6731C16.7202 21.0001 15.8802 21.0001 14.2 21.0001H9.8C8.11984 21.0001 7.27976 21.0001 6.63803 20.6731C6.07354 20.3855 5.6146 19.9265 5.32698 19.362C5 18.7203 5 17.8802 5 16.2001V9.77753M21 12.0001L15.5668 5.96405C14.3311 4.59129 13.7133 3.9049 12.9856 3.65151C12.3466 3.42894 11.651 3.42899 11.0119 3.65165C10.2843 3.90516 9.66661 4.59163 8.43114 5.96458L3 12.0001"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Información de la propiedad */}
      <div className="p-4">
        <h5 className="text-lg font-bold mb-2">{property.Name}</h5>

        {/* Precio */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">Precio</span>
          <span className="font-bold text-gray-800">
            ${property.Price.toLocaleString()}
          </span>
        </div>

        {/* Dirección */}
        <div className="text-sm text-gray-600">
          <p>{property.Address}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;