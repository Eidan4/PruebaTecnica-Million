import React from "react";
import AppRoutes from "./app/routes"; // Importa el archivo central de rutas

function App() {
  return (
    <div className="App">
      <AppRoutes /> {/* Carga el componente que gestiona las rutas */}
    </div>
  );
}

export default App;