import { BuildingOffice2Icon } from "@heroicons/react/24/solid";

export default function HotelCard(props: { name: string }) {
  return (
    <div className="card w-56 xl:w-60 bg-base-100 shadow-xl">
      <figure className="px-8 pt-8">
        <BuildingOffice2Icon className="size-8" />
      </figure>
      <div className="card-body items-center text-center pt-2 px-8">
        <p className="card-title text-base">{props.name}</p>
      </div>
    </div>
  );
}
