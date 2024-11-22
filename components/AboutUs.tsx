import Image from "next/image";
import WhyChooseUsImage from "../public/why-choose-us.png";
import OneIcon from "@/public/one-icon.svg";
import InovanterIcon from "@/public/Inov-icon.svg";
import GuaranteIcon from "@/public/Guarantee-icon.svg";
import ResistanceIcon from "@/public/Resistance-icon.svg";
import { useLanguage } from "@/zustand";
import { Language } from "@/lib/utils";

export default function AboutUs() {
  const { language } = useLanguage();

  return (
    <section
      dir={language == "ar" ? "rtl" : "ltr"}
      id="qui"
      className="flex justify-center items-center p-4 md:p-6 lg:p-8">
      <div className="flex xl:flex-row flex-col  gap-8 justify-between items-center container">
        <div className="space-y-12 flex flex-col h-full justify-between font-open">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F2F2F]">
            {Language.aboutUs.title[language]}
          </h1>
          <p className="text-sm md:text-base text-[#2F2F2F]">
            {Language.aboutUs.description[language]}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Image
                alt="One icon"
                src={OneIcon}
                className="w-8 h-8 text-yellow-500"
                color="gray"
              />
              <div>
                <h3 className="font-semibold text-[#2F2F2F]">
                  {Language.aboutUs.features[0].title[language]}
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  {Language.aboutUs.features[0].description[language]}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Image
                alt="One icon"
                src={InovanterIcon}
                className="w-8 h-8 text-yellow-500"
                color="gray"
              />
              <div>
                <h3 className="font-semibold text-[#2F2F2F]">
                  {Language.aboutUs.features[1].title[language]}
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  {Language.aboutUs.features[1].description[language]}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Image
                alt="One icon"
                src={ResistanceIcon}
                className="w-8 h-8 text-yellow-500"
                color="gray"
              />{" "}
              <div>
                <h3 className="font-semibold text-[#2F2F2F]">
                  {Language.aboutUs.features[2].title[language]}
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  {Language.aboutUs.features[2].description[language]}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Image
                alt="One icon"
                src={GuaranteIcon}
                className="w-8 h-8 text-yellow-500"
                color="gray"
              />
              <div>
                <h3 className="font-semibold text-[#2F2F2F]">
                  {Language.aboutUs.features[3].title[language]}
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  {Language.aboutUs.features[3].description[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={WhyChooseUsImage}
            alt="Paintbrush with yellow paint splash"
            height={629}
            width={514}
            className="object-cover rounded-lg h-[514px] max-w-[629px] max-md:max-w-[329px]"
          />
        </div>
      </div>
    </section>
  );
}
