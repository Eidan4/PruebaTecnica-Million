import translations from "../assets/translations/translation.json";

const translate = (key) => {
  const keys = key.split(".");
  return keys.reduce((obj, currentKey) => obj?.[currentKey], translations) || key;
};

export default translate;