import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
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
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done. the this is
              a long post for the text. This small text has to be place here,
              since this is
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
            <Link href="#" className="text-gray-300 hover:text-white">
              Qui sommes nous
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Produits
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Blog
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Contactez nous
            </Link>
          </div>

          <div className="grid gap-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              Offre
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Notre équipe
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Leadership
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
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

        {/* <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#"
            className="rounded border border-gray-700 px-6 py-2 text-sm text-gray-300 hover:border-gray-600 hover:text-white">
            Event
          </Link>
          <Link
            href="#"
            className="rounded border border-gray-700 px-6 py-2 text-sm text-gray-300 hover:border-gray-600 hover:text-white">
            Event
          </Link>
          <Link
            href="#"
            className="rounded border border-gray-700 px-6 py-2 text-sm text-gray-300 hover:border-gray-600 hover:text-white">
            Event
          </Link>
          <Link
            href="#"
            className="rounded border border-gray-700 px-6 py-2 text-sm text-gray-300 hover:border-gray-600 hover:text-white">
            Event
          </Link>
        </div> */}

        <div className="mt-12">
          <Image
            src="/logo-opera.svg"
            alt="Secondary Logo"
            width={56}
            height={56}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between border-t border-gray-800 pt-8 text-sm text-gray-400">
          <p>Copyright 2024 Artlean Agency. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
