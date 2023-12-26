import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiWorld } from "react-icons/bi";
const SelectLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const [items] = useState([
    { label: "PERSIAN", value: "fa" },
    { label: "ENGLISH", value: "en" },
  ]);
  const [showLanguages, setShowLanguages] = useState(false);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setShowLanguages(false);
  };

  const languagesIconClickHandler = () => {
    setShowLanguages(!showLanguages);
  };
  return (
    <div className="relative transition-all z-[100] fadeShow1">
      <div
        className={`flex items-center justify-center gap-2 border-2 border-primary bg-black/80 p-2 text-white transition-all duration-300 lg:cursor-pointer lg:px-4 lg:py-3 ${
          !showLanguages
            ? "rounded-lg"
            : " rounded-lg rounded-bl-none rounded-br-none"
        }`}
        onClick={languagesIconClickHandler}
      >
        {i18n.language === "fa" ? "PERSIAN" : "ENGLISH"}
        <div className="text-xl">
          <BiWorld />
        </div>
      </div>
      {showLanguages && (
        <div className="fadeShow top-13 absolute left-0 flex flex-col items-center justify-center gap-2 rounded-bl-xl rounded-br-xl border-2 border-primary bg-black/80 px-[1.35rem] py-3 lg:px-[1.85rem]">
          {items.map((i, index) => {
            return (
              <p
                key={index}
                className="text-white lg:cursor-pointer"
                onClick={() => {
                  changeLanguage(i.value);
                }}
              >
                {i.label}
              </p>
            );
          })}
        </div>
      )}

      <div className="absolute right-[-0.5rem] top-[-0.5rem] h-4 w-4 rounded-full bg-primary"></div>
      <div className="absolute right-[-0.5rem] top-[-0.5rem] h-4 w-4 animate-ping rounded-full bg-primary"></div>
    </div>
  );
};
export default SelectLanguage;
