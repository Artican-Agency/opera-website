import Image from "next/image";
import Link from "next/link";
import PainterImage from "@/public/pntr.png";

function PainterFinder() {
  return (
    <div className="flex flex-col relative w-full max-w-6xl mx-auto mt-12 max-md:mt-24">
      <div
        className="absolute bottom-0 left-0 right-0 bg-[#F9BF29] p-8 text-center z-50"
        style={{
          borderTopLeftRadius: "4rem",
          borderTopRightRadius: "4rem",
        }}>
        <h2 className="text-4xl font-bold mb-2 text-white font-open">
          Trouvez votre peintre
        </h2>
        <p className="text-lg mb-4 text-white font-open">
          Votre peintre est disponible maintenant
        </p>
        <Link
          href="https://play.google.com/store/apps/details?id=com.chemsou00.allo_painter&hl=fr_CA"
          className="inline-block bg-[#2C2C2C] bg-gradient-to-t text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-open">
          Détails
        </Link>
      </div>
      <div className="relative bottom-32 md:bottom-44 overflow-hidden rounded-b-3xl z-0">
        <Image
          src={PainterImage}
          width={386}
          height={374}
          alt="Painter with tools"
        />
      </div>
    </div>
  );
}

export default PainterFinder;
