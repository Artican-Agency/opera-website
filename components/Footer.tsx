import { useLanguage } from "@/zustand";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Language } from "@/lib/utils";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer
      dir={language == "ar" ? "rtl" : "ltr"}
      className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Image
            src="/logo-opera.svg"
            alt="Opera Logo"
            width={150}
            height={80}
            className="h-32 w-auto"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-gray-300">
              {Language.footer.description[language]}
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://www.facebook.com/operapeintureofficiel"
                className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/operapeinture.official/"
                className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Link href="#qui" className="text-gray-300 hover:text-white">
              {Language.footer.links.about[language]}
            </Link>
            <Link
              href="/produit/batiments"
              className="text-gray-300 hover:text-white">
              {Language.footer.links.products[language]}
            </Link>
            <Link href="/blogs" className="text-gray-300 hover:text-white">
              {Language.footer.links.blog[language]}
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              {Language.footer.links.contact[language]}
            </Link>
          </div>

          <div className="grid gap-4">
            <Link href="#announce" className="text-gray-300 hover:text-white">
              {Language.footer.links.announcement[language]}
            </Link>
            <Link href="#qui" className="text-gray-300 hover:text-white">
              {Language.footer.links.about[language]}
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              {Language.footer.legal.terms[language]}
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              {Language.footer.legal.privacy[language]}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="https://play.google.com/store/apps/details?id=com.chemsou00.allo_painter&fbclid=IwY2xjawGZaQVleHRuA2FlbQIxMAABHX_lXyTE-JJLVgQZrd9l0jXydbSAqfc0_k9QOkTaZcvSB6TQjXHXsHTy9Q_aem_w7QMx_7FSWaJAUCsG9r4tw"
            className="h-10">
            <Image
              src="/googleplay.svg"
              alt="Get it on Google Play"
              width={140}
              height={40}
              className="h-full w-auto"
            />
          </Link>
          <Link href="https://www.apple.com/" className="h-10">
            <Image
              src="/apple.svg"
              alt="Download on the App Store"
              width={140}
              height={40}
              className="h-full w-auto"
            />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between border-t border-gray-800 pt-8 text-sm text-gray-400">
          <p> {Language.footer.legal.copyright[language]}</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              {Language.footer.legal.terms[language]}
            </Link>
            <Link href="#" className="hover:text-white">
              {Language.footer.legal.privacy[language]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
