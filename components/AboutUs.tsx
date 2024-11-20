import Image from "next/image";
import { BicepsFlexed, BookHeart, Gem, Goal } from "lucide-react";
import WhyChooseUsImage from "../public/why-choose-us.png";
import OneIcon from "@/public/one-icon.svg";
import InovanterIcon from "@/public/Inov-icon.svg";
import GuaranteIcon from "@/public/Guarantee-icon.svg";
import ResistanceIcon from "@/public/Resistance-icon.svg";

export default function AboutUs() {
  return (
    <section id="qui" className="flex justify-center items-center p-4 md:p-6 lg:p-8">
      <div className="flex xl:flex-row flex-col  gap-8 justify-between items-center container">
        <div className="space-y-12 flex flex-col h-full justify-between font-open">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F2F2F]">
            Qui sommes nous ?
          </h1>
          <p className="text-sm md:text-base text-[#2F2F2F]">
            Fondée en 2014 à Batna, Opera Peintures est spécialisée dans la
            fabrication, production et exportation de peintures de haute
            qualité, respectant les normes de durabilité et de sécurité
            environnementale. Depuis sa création, l'entreprise s'est imposée
            comme l'un des leaders du secteur en Algérie et en Afrique du Nord.
            Opera Peintures propose plus de 60 produits différents, y compris
            des peintures architecturales et décoratives, pour répondre aux
            besoins de ses clients. Actuellement, ses produits sont disponibles
            dans plus de 80 points de vente, en Algérie ainsi qu'en Côte
            d'Ivoire et au Burkina Faso.
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
                  Qualité inégalée
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  Nos produits sont fabriqués avec des matériaux de première
                  qualité pour garantir une finition impeccable et durable.
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
                  Innovation continue
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  Nous intégrons les dernières technologies et tendances du
                  marché pour offrir des solutions de peinture qui répondent aux
                  exigences modernes.
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
                  Résistance exceptionnelle
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  Que ce soit contre les intempéries, les rayons UV ou les
                  taches, nos peintures sont conçues pour durer et protéger vos
                  murs.
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
                  Satisfaction client garantie
                </h3>
                <p className="text-sm text-[#2F2F2F]">
                  Votre satisfaction est notre priorité. Nous vous accompagnons
                  à chaque étape pour vous assurer que le résultat final dépasse
                  vos attentes.
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
