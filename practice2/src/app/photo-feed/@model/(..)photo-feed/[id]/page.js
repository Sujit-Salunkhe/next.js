import WondersImages from "../../../wonders";
import Image from "next/image";
import Model from "@/components/model";
export default function PhotoPage({ params: { id } }) {
  const photo = WondersImages.find((p) => p.id === id);
  return (
    <Model>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.location}</h3>
      </div>
    </Model>
  );
}
 