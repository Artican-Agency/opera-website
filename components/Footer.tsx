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
              <Link href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="/facebook.svg"
                  alt="Opera Logo"
                  width={150}
                  height={80}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="/facebook.svg"
                  alt="Opera Logo"
                  width={150}
                  height={80}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="/facebook.svg"
                  alt="Opera Logo"
                  width={150}
                  height={80}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="/facebook.svg"
                  alt="Opera Logo"
                  width={150}
                  height={80}
                  className="h-12 w-auto"
                />
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
          <Link href="#" className="h-10">
            <Image
              src="/placeholder.svg"
              alt="Get it on Google Play"
              width={140}
              height={40}
              className="h-full w-auto"
            />
          </Link>
          <Link href="#" className="h-10">
            <Image
              src="/placeholder.svg"
              alt="Download on the App Store"
              width={140}
              height={40}
              className="h-full w-auto"
            />
          </Link>
          <Link href="#" className="h-10">
            <Image
              src="/placeholder.svg"
              alt="Get it on AppGallery"
              width={140}
              height={40}
              className="h-full w-auto"
            />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
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
        </div>

        <div className="mt-12">
          <Image
            src="/placeholder.svg"
            alt="Secondary Logo"
            width={100}
            height={40}
            className="h-8 w-auto"
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
