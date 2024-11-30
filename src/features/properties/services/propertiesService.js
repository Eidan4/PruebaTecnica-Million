import apiClient from "../../../services/apiClient";

export const getPropertiesWithImageByFilter = async (filters) => {
  try {
    const response = await apiClient.get("/Property/GetPropertiesWithImageByFilter", {
      params: filters,
    });
 
    const propertiesData =
    response.data?.parameters?.[0]?.value &&
    JSON.parse(response.data.parameters[0].value);
    return propertiesData || [];
  } catch (error) {
    console.error("Error fetching properties with images:", error);
    throw error;
  }
};

export const getPropertyById = async (id) => {
  try {
    const response = await apiClient.get(`/Property/GetPropertiesWithImageById/${id}`);
    const propertiesData =
    response.data?.parameters?.[0]?.value &&
    JSON.parse(response.data.parameters[0].value);
    return propertiesData || [];
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error; 
  }
};

export const createPropertyTrace = async (propertyTraceDto) => {
  try {
    const payload = {
      propertyTraceDto,
    };

    const response = await apiClient.post(
      "/PropertyTrace/CreatePropertyTrace",
      payload
    );

    const result =
      response.data?.parameters?.[0]?.value &&
      JSON.parse(response.data.parameters[0].value);

    return result || {};
  } catch (error) {
    console.error("Error creating PropertyTrace:", error);
    throw error;
  }
};

export const getPropertyByPropertyId = async (id) => {
  try {
    const response = await apiClient.get(`/PropertyTrace/GetPropertyTraceByPropertyId/${id}`);
    const propertiesData =
    response.data?.parameters?.[0]?.value &&
    JSON.parse(response.data.parameters[0].value);
    return propertiesData || [];
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    throw error; 
  }
};