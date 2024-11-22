"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Person from "./../public/person-1.png";
import { User } from "lucide-react";
import { useLanguage } from "@/zustand";
import { Language } from "@/lib/utils";

export default function Testimonial() {
  const { language } = useLanguage();
  return (
    <Card className="w-full max-w-6xl mx-auto my-12 relative z-0">
      <CardContent className="p-6 z-0">
        <h2 className="text-3xl font-bold text-center mb-6 font-open">
          {Language.testimonials.title[language]}
        </h2>

        <Swiper
          slidesPerView={1}
          pagination={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            reverseDirection: language == "ar",
          }}
          loop={true}
          modules={[Navigation, Autoplay]}>
          <SwiperSlide className="flex flex-col justify-center items-center z-0">
            <blockquote className="text-center mb-6 font-open z-0">
              {Language.testimonials.reviews[0].text[language]}
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
              {Language.testimonials.reviews[1].text[language]}
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
              {Language.testimonials.reviews[2].text[language]}
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
