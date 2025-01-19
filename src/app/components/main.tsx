export const Main = () => {
  return (
    <div className="flex-grow mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative inline-block max-w-[700px] mx-auto">
          <img
            src="/home_image.png"
            alt="Home"
            width={600}
            height={600}
            className="object-cover w-full"
          />
          {/* <div className="absolute bottom-4 right-4 bg-white p-4 shadow-md">
            <p className="text-left">
              Klarer ikke gi slipp på kundene
              – Jeg er jo oppvokst i en vinkjeller, så interessen har jeg alltid hatt, smiler Paul Knoph, som fortsatt driver Vinstua.
            </p>
          </div> */}
        </div>

        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Velkommen til Vinstua</h2>
          <p className="text-gray-700">
            Velkommen til Vinstua! Vi tilbyr et nøye utvalgt sortiment av utstyr for vin- og ølbrygging, samt elegant tilbehør for vinelskere. Enten du er nybegynner eller erfaren brygger, hjelper vi deg med å finne det du trenger for å lage kvalitetsdrikker hjemme. Besøk oss for personlig service og gode råd!
          </p>
        </div>
      </div>
    </div>
  );
};
