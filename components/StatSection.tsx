"use client";
import { useLanguage } from "@/zustand";
import { Language } from "@/lib/utils";

function StatSection() {
  const { switchLanguage, language } = useLanguage();

  const handleLanguageChange = (newLanguage: "en" | "fr" | "ar") => {
    switchLanguage(newLanguage);
  };

  return (
    <section className="bg-primary-ui max-md:mx-4 md:max-w-[700px] rounded-full flex justify-evenly items-center relative bottom-12 xl:left-1/3 md:left-1/4 z-20">
      <div className="p-4">
        <h3
          dir={language == "ar" ? "rtl" : "ltr"}
          className="font-sans whitespace-nowrap text-sm  max-w-24 text-center text-black font-semibold">
          {Language.statSection.stats[0].title[language]}
        </h3>
        <p className="text-center font-sans lg:text-4xl text-xl font-bold text-black">
          {Language.statSection.stats[0].value}
        </p>
      </div>
      <div className="p-4">
        <h3
          dir={language == "ar" ? "rtl" : "ltr"}
          className="font-sans text-sm max-w-24 text-center text-black font-semibold">
          {Language.statSection.stats[1].title[language]}
        </h3>
        <p className="font-sans text-center lg:text-4xl text-2xl font-bold text-black">
          {Language.statSection.stats[1].value}
        </p>
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <h3 className="font-sans text-sm text-black font-semibold">
          {Language.statSection.stats[2].title[language]}
        </h3>
        <p className="flex flex-col justify-center items-center font-sans text-center lg:text-4xl text-2xl font-bold text-black">
          {language == "ar"
            ? Language.statSection.stats[2].unit?.[language]
            : ""}
          {Language.statSection.stats[2].value}{" "}
          {language !== "ar"
            ? Language.statSection.stats[2].unit?.[language]
            : ""}
        </p>
      </div>
    </section>
  );
}

export default StatSection;
