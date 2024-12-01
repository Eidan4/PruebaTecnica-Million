import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import useTranslation from "../../hooks/useTranslation"; // Importa el hook para traducciones
import "./Footer.css";

const Footer = () => {
  const { translation } = useTranslation(); // Obtén las traducciones del contexto

  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 pb-5 w-full">
      <div className="max-w-screen-xl mx-auto">
        {/* Logos */}
        <div className="flex justify-between items-center border-b pb-5 mb-5">
          <img
            src="https://cdn.millionluxury.com/image-resizing?image=https://static.millionluxury.com/spinfile/Spin/Data/Estate/IMG/733595ac7750469d92325e641b1e6549.svg?v=945"
            alt="Million Logo"
            className="h-10"
          />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">{translation.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.millionluxury.com/disclaimer.html"
                  className="text-purple-700 hover:underline"
                >
                  {translation.footer.privacyPolicy}
                </a>
              </li>
              <li>
                <a
                  href="https://www.millionluxury.com/equal_housing.html"
                  className="text-purple-700 hover:underline"
                >
                  {translation.footer.equalHousing}
                </a>
              </li>
              <li>
                <a
                  href="https://www.millionluxury.com/ada_compliance.html"
                  className="text-purple-700 hover:underline"
                >
                  {translation.footer.adaCompliance}
                </a>
              </li>
            </ul>
          </div>

          {/* Sobre MILLION */}
          <div>
            <h3 className="font-bold text-lg mb-4">{translation.footer.about}</h3>
            <p className="text-sm leading-6">{translation.footer.aboutDescription}</p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4">{translation.footer.connect}</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/milllionluxury"
                className="text-purple-700 hover:text-purple-900"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/milllionluxury/"
                className="text-purple-700 hover:text-purple-900"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm">{translation.footer.phone}</p>
            <p className="text-sm">
              <a href="mailto:eidanjoelruizpinzon@gmail.com" className="hover:underline">
                {translation.footer.email}
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-8">
          {translation.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;