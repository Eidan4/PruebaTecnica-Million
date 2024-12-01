import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  createPropertyTrace,
  getPropertyById,
  getPropertyByPropertyId,
} from "../services/propertiesService";
import Footer from "../../../component/Footer/Footer";
import TraceForm from "../../traces/components/TraceForm";
import Header from "../../../component/Header/Header";
import useTranslation from "../../../hooks/useTranslation"; // Hook para traducciones

const PropertyDetail = () => {
  const { translation } = useTranslation(); // Obtén las traducciones
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [propertyTraces, setPropertyTraces] = useState([]);

  // Obtener la propiedad por ID
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getPropertyById(id);
        setProperty(data);
        setMainImage(data.Images[0]?.File || "");
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Obtener los trazos de la propiedad
  useEffect(() => {
    const fetchTraces = async () => {
      try {
        if (property) {
          const traces = await getPropertyByPropertyId(property.Property.Id);
          setPropertyTraces(traces);
        }
      } catch (error) {
        console.error("Error fetching property traces:", error);
      }
    };

    fetchTraces();
  }, [property]);

  if (!property) {
    return <p>{translation.propertyDetail.noPropertyFound}</p>;
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleTraceSubmit = async (propertyTraceDto) => {
    try {
      const result = await createPropertyTrace(propertyTraceDto);
      setModalVisible(true);
      console.log(translation.propertyDetail.traceForm.success, result);
    } catch (error) {
      console.error(translation.propertyDetail.traceForm.error, error);
      alert(translation.propertyDetail.traceForm.error);
    }
  };

  const handleModalAccept = async () => {
    try {
      const traces = await getPropertyByPropertyId(property.Property.Id);
      setPropertyTraces(traces); // Actualiza los trazos con los nuevos datos
      closeModal();
    } catch (error) {
      console.error("Error fetching property traces:", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false); // Cierra el modal
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative pb-6">
        <Header isDark={true} />
      </div>

      {/* Contenedor centralizado con límite */}
      <div className="max-w-screen-xl mx-auto">
        {/* Sección de imágenes y formulario */}
        <div className="property-detail-container grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex-1 grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={mainImage}
                  alt="Imagen destacada"
                />
              </div>
              {loading ? (
                <p>{translation.propertyDetail.loading}</p>
              ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {property.Images.map((image, index) => (
                    <img
                      key={index}
                      className="h-16 w-full object-cover rounded-lg cursor-pointer hover:opacity-80"
                      src={image.File}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => handleThumbnailClick(image.File)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 flex items-stretch">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full flex flex-col justify-between">
              <TraceForm propertyId={property.Property.Id} onSubmit={handleTraceSubmit} />
            </div>
          </div>
        </div>

        <div className="p-5">
          <h1 className="text-4xl font-bold text-gray-800 text-center my-8">
            {property.Property.Name}
          </h1>
          <p className="text-lg text-gray-600 text-center">{property.Property.Address}</p>
          <p className="text-3xl font-bold text-green-600 text-center">
            ${property.Property.Price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 text-center">
            {translation.propertyDetail.propertyInfo.internalCode}{" "}
            {property.Property.CodeInternal}
          </p>
        </div>

        {/* Sección de trazos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">
              {translation.propertyDetail.reviews.title}
            </h3>
            <div
              className="space-y-4 overflow-y-auto"
              style={{ maxHeight: "300px" }} // Altura máxima de 300px, ajustable según tu diseño
            >
              {propertyTraces.length > 0 ? (
                propertyTraces.map((trace, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://via.placeholder.com/48"
                      alt={`Trace ${index + 1}`}
                    />
                    <div>
                      <p className="font-bold">{trace.Name}</p>
                      <p className="text-gray-500">
                        {translation.propertyDetail.reviews.value}: $ {trace.Value.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p>{translation.propertyDetail.reviews.noTraces}</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">
              {translation.propertyDetail.map.title}
            </h3>
            <iframe
              src={`https://maps.google.com/maps?q=${property.Property.Address}&output=embed`}
              className="w-full h-64 rounded-lg border-0"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-[90%] md:w-[400px]">
            <h2 className="text-lg font-bold text-center mb-4">
              {translation.propertyDetail.traceForm.success}
            </h2>
            <button
              onClick={handleModalAccept}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              {translation.propertyDetail.traceForm.successMessage}
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PropertyDetail;