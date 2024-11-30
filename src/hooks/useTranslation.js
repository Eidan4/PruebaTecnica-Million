import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const useTranslation = () => {
  const { translation, switchLanguage, language } = useContext(LanguageContext);
  return { translation, switchLanguage, language };
};

export default useTranslation;