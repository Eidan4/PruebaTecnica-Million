import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext"; // Ajusta la ruta según tu estructura

const Header = ({ isDark = false }) => {
  const { translation, switchLanguage, language } = useContext(LanguageContext);

  const logoSrc = isDark
    ? "https://cdn.millionluxury.com/image-resizing?image=https://static.millionluxury.com/spinfile/Spin/Data/Estate/IMG/733595ac7750469d92325e641b1e6549.svg?v=945"
    : "https://cdn.millionluxury.com/image-resizing?image=https://static.millionluxury.com/spinfile/Spin/Data/Estate/IMG/9f442b81cea74987b3fe785a7d9f41c6.svg?v=413";

  return (
    <div className="bg-transparent top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="absolute left-0 top-4 px-6">
          <Link to="/" aria-label={translation.header.home}>
            <img src={logoSrc} alt="Macondo Logo" className="h-8" />
          </Link>
        </div>

        {/* Selector de idioma */}
        <div className="flex items-center space-x-4 absolute right-0 top-4 px-6">
          <button
            onClick={() => switchLanguage("en")}
            className={`text-sm ${language === "en" ? "font-bold" : "font-normal"} ${isDark ? 'text[#000000]' : 'text-white'} text-gray-600 hover:text-gray-900`}
          >
            English
          </button>
          <button
            onClick={() => switchLanguage("es")}
            className={`text-sm ${language === "es" ? "font-bold" : "font-normal"} ${isDark ? 'text[#000000]' : 'text-white'}  text-gray-600 hover:text-gray-900`}
          >
            Español
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;