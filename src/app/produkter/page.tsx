import Image from "next/image";

export default function Produkter() {
  const products = [
    {
      id: 1,
      title: "Gjær",
      description: "Gjær (ofte Saccharomyces cerevisiae) er mikroorganismen som omdanner sukker til alkohol og karbondioksid gjennom gjæringsprosessen. Ulike typer gjær kan gi forskjellige smaksprofiler i både vin og øl.",
      price: 129,
      image: "https://placehold.co/300x200"
    },
    {
      id: 2,
      title: "Maltekstrakt",
      description: "Maltekstrakt er et konsentrat laget av maltet korn, ofte bygg, som gir ølet sin karakteristiske smak, farge og alkoholinnhold. Det brukes spesielt i ølbrygging for å tilføre sukker og aroma.",
      price: 249,
      image: "https://placehold.co/300x200"
    },
    {
      id: 3,
      title: "Eikefat",
      description: "Eikefat brukes i vinproduksjon for å gi vinen unike smaker som vanilje, karamell og krydder. Disse fatene påvirker også teksturen og aldringsegenskapene til vinen.",
      price: 799,
      image: "https://placehold.co/300x200"
    },
    {
      id: 4,
      title: "Humle",
      description: "Humle er en viktig ingrediens i øl som gir bitterhet, aroma og smak, og bidrar til å balansere sødmen fra malten. Ulike humletyper gir varierte smaksprofiler, fra fruktige til krydrede toner.",
      price: 89,
      image: "https://placehold.co/300x200"
    },
    {
      id: 5,
      title: "Druejuice eller most",
      description: "I vinproduksjon er druejuice (most) den primære ingrediensen som gjæres til vin. Druenes sukkerinnhold og syrebalanse er avgjørende for sluttproduktets kvalitet og smak.",
      price: 449,
      image: "https://placehold.co/300x200"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Våre Produkter</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img 
              src={product.image} 
              alt={product.title} 
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-xl font-bold text-blue-600">kr {product.price},-</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
