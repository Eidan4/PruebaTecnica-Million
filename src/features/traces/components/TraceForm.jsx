import React, { useState } from "react";
import useTranslation from "../../../hooks/useTranslation"; // Hook para traducciones

const TraceForm = ({ propertyId, onSubmit}) => {
  const { translation } = useTranslation(); // Obtén las traducciones

  const [formData, setFormData] = useState({
    name: "",
    value: "",
    tax: "",
    dateSale: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const propertyTraceDto = {
        idProperty: propertyId,
        dateSale: new Date(formData.dateSale).toISOString(),
        name: formData.name,
        value: parseFloat(formData.value),
        tax: parseFloat(formData.tax),
      };
      onSubmit(propertyTraceDto);
      setFormData({
          name: "",
          value: "",
          tax: "",
          dateSale: "",
      });
  }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold mb-4">{translation.traceForm.title}</h3>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          placeholder={translation.traceForm.namePlaceholder}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={formData.name}
          onChange={handleInputChange}
          maxLength={20}
        />
        <input
          type="number"
          name="value"
          required
          placeholder={translation.traceForm.valuePlaceholder}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={formData.value}
          onChange={handleInputChange}
          max={10000000}
          min={1}
        />
        <input
          type="number"
          name="tax"
          required
          placeholder={translation.traceForm.taxPlaceholder}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={formData.tax}
          onChange={handleInputChange}
          max={10000000}
          min={0}
          step="0.01"
        />
        <label htmlFor="dateSale" className="block text-sm font-medium text-gray-700">
          {translation.traceForm.dateLabel}
        </label>
        <input
          type="date"
          name="dateSale"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={formData.dateSale}
          min={new Date().toISOString().split("T")[0]} // Establece la fecha mínima como hoy
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="w-full bg-[#7E3AF2] text-white font-bold py-2 rounded-lg text-sm hover:bg-[#5e2ab5]"
        >
          {translation.traceForm.submitButton}
        </button>
      </form>
    </div>
  );
};

export default TraceForm;