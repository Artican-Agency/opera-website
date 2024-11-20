"use client";
import Navbar from "@/components/Navbar";
import { SwiperSlide, Swiper } from "swiper/react";
import bgPhoto from "../../public/colors.png";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import Footer from "@/components/Footer";
import PainterFinder from "@/components/PainterFinder";
import { ChevronRight } from "lucide-react";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center h-[500px] text-white w-full">
      <Navbar />

      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full z-0 myswiper">
        <SwiperSlide>
          <Image
            src={bgPhoto}
            alt="Photo by Drew Beamer"
            fill
            className="object-cover max-w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-1/5 z-20 flex items-center justify-center xl:w-2/3 m-4 flex-col">
        <h1 className="text-5xl font-semibold">Contact Us</h1>
        <h3 className="flex justify-center items-center relative top-12 text-md">
          <a href="/">Acceuil</a> <ChevronRight height={18} width={18} />
          Contact
        </h3>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center w-full p-6 my-24">
      <div className="mb-8 lg:w-1/3 mx-2">
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-start font-open text-black">
          Contactez nous
        </h1>
        <p className="text-muted-foreground font-open lg:text-start text-center text-black">
          Contactez-nous pour toute demande, retour ou assistance – nous sommes
          là pour vous aider !
        </p>
      </div>

      <form
        target="_blank"
        action="https://formsubmit.co/contact@operapeinture.com"
        method="POST"
        className="space-y-6 w-3/5">
        <div>
          <Label className="text-black" htmlFor="name">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            name="name"
            className="mt-2 text-black"
            required
          />
        </div>

        <div>
          <Label className="text-black" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            className="mt-2 text-black"
            required
          />
        </div>

        <div>
          <Label className="text-black" htmlFor="message">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            className="mt-2 min-h-[150px] text-black"
            required
          />
        </div>

        <Button type="submit" className="w-40 bg-black hover:bg-black/90">
          Envoyer
        </Button>
      </form>
    </div>
  );
}

export default function Page() {
  return (
    <main className="bg-white h-full overflow-y-hidden">
      <HeroSection />

      <ContactForm />

      <div className="mt-52">
        <PainterFinder />
      </div>

      <Footer />
    </main>
  );
}
