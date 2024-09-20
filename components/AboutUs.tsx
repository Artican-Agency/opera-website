import Image from "next/image";
import {
  BicepsFlexed,
  BookHeart,
  Gem,
  Goal,
  Shield,
  Star,
  ThumbsUp,
  Zap,
} from "lucide-react";
import WhyChooseUsImage from "../public/why-choose-us.png";

export default function AboutUs() {
  return (
    <div className="flex justify-center items-center p-4 md:p-6 lg:p-8">
      <div className="flex xl:flex-row flex-col gap-8 justify-between items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2F2F2F]">
            Qui sommes nous ?
          </h1>
          <p className="text-sm md:text-base text-[#2F2F2F]">
            Opéra Peinture est une marque de référence dans le domaine de la
            peinture et de la décoration murale, dédiée à transformer vos
            espaces en véritables œuvres d'art. Forts d'une expertise éprouvée
            et d'un savoir-faire unique, nous offrons des solutions innovantes
            qui allient esthétique, durabilité et protection. Chez Opéra
            Peinture, nous croyons que chaque mur mérite d'être mis en valeur
            avec des produits de qualité supérieure, conçus pour résister aux
            épreuves du temps tout en sublimant vos intérieurs. Notre mission
            est de vous accompagner dans la création d'espaces harmonieux,
            élégants et personnalisés, grâce à des peintures qui reflètent votre
            style et vos aspirations.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Gem className="w-8 h-8 text-yellow-500" color="gray" />
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
              <Goal className="w-8 h-8 text-yellow-500" color="gray" />
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
              <BicepsFlexed className="w-8 h-8 text-yellow-500" color="gray" />
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
              <BookHeart className="w-8 h-8 text-yellow-500" color="gray" />
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
            className="object-cover rounded-lg h-[514px] max-w-auto"
          />
        </div>
      </div>
    </div>
  );
}
