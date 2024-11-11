"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Person from "./../public/person-1.png";
import { User } from "lucide-react";

export default function Testimonial() {
  return (
    <Card className="w-full max-w-6xl mx-auto my-12 relative z-0">
      <CardContent className="p-6 z-0">
        <h2 className="text-3xl font-bold text-center mb-6 font-open">
          Témoignages
        </h2>

        <Swiper
          slidesPerView={1}
          pagination={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}>
          <SwiperSlide className="flex flex-col justify-center items-center z-0">
            <blockquote className="text-center mb-6 font-open z-0">
              Depuis que j'utilise les produits d'Opéra Peintures, mes projets
              de décoration ont pris une nouvelle dimension. La qualité
              exceptionnelle des peintures, combinée à leur engagement pour la
              durabilité et l'environnement, me donne confiance à chaque
              application. Opéra Peintures est sans aucun doute le choix idéal
              pour un travail de finition impeccable.
            </blockquote>
            <div className="flex flex-col items-center">
              <User className="w-8 h-8 text-muted-foreground mb-2" />

              <p className="text-sm text-muted-foreground font-open">
                Nadir Bouzid
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center z-0">
            <blockquote className="text-center mb-6 font-open z-0">
              Opéra Peintures offre une gamme de peintures de haute qualité qui
              se distingue par son innovation et son respect des normes
              environnementales. En tant que professionnel, j'apprécie leur
              dévouement à fournir des produits performants et sûrs. La variété
              de leurs couleurs et finitions me permet de répondre aux goûts les
              plus exigeants de mes clients.
            </blockquote>
            <div className="flex flex-col items-center">
              {/* Icon of user lucide react */}

              <User className="w-8 h-8 text-muted-foreground mb-2" />

              <p className="text-sm text-muted-foreground font-open">
                Yasmina Cherif
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col justify-center items-center z-0">
            <blockquote className="text-center mb-6 font-open z-0">
              Je recommande vivement Opéra Peintures à quiconque cherche des
              produits de peinture fiables et esthétiques. Leur équipe est
              incroyablement serviable, et les démonstrations en boutique
              facilitent grandement le choix des produits. L'attention portée
              aux détails et aux préférences de leurs clients fait vraiment la
              différence.
            </blockquote>
            <div className="flex flex-col items-center">
              <User className="w-8 h-8 text-muted-foreground mb-2" />

              <p className="text-sm text-muted-foreground font-open">
                Karim Bensalem
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </CardContent>
    </Card>
  );
}
