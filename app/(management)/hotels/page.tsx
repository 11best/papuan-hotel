import HotelCard from "@/components/HotelCard";

const mockHotels = [
  { id: "xoxo0101", name: "Hotel 1 @eiei" },
  { id: "uuyyii12", name: "บ้านแมวรับฝากแมว" },
  { id: "dfsiop44", name: "Prasert WattanaPrasert Wattana" },
  { id: "34kkjddj", name: "Bohumil Damijan" },
  { id: "34kkjddj", name: "Legefea-In-Vyking Haven" },
  { id: "34kkjddj", name: "Bridraydi Du Pobri" },
];

export default function Page() {
  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {mockHotels.map((hotel) => (
        <HotelCard key={hotel.id} name={hotel.name} />
      ))}
    </div>
  );
}
