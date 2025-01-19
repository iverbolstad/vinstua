import Link from "next/link";

export const Main = () => {
  return (
    <div className="flex-grow container mx-auto px-4 mt-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image section with overlay and animation */}
        <div className="relative w-full md:w-1/2 group transition-all duration-300 hover:scale-[1.02]">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/home_image.png"
              alt="Home"
              width={600}
              height={600}
              className="object-cover w-full h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        {/* Content section with better typography and spacing */}
        <div className="flex-1 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Velkommen til{" "}
            <span className="text-amber-700 italic">Vinstua</span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Velkommen til Vinstua! Vi tilbyr et nøye utvalgt sortiment av utstyr for vin- og ølbrygging, 
            samt elegant tilbehør for vinelskere. Enten du er nybegynner eller erfaren brygger, 
            hjelper vi deg med å finne det du trenger for å lage kvalitetsdrikker hjemme.
          </p>

          {/* Added CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/produkter" 
              className="px-8 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors text-center"
            >
              Utforsk produkter
            </Link>
            <Link 
              href="/kontakt" 
              className="px-8 py-3 border-2 border-amber-700 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors text-center"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
