import {
  HomeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import CatIcon from "./Icons/CatIcon";

export default function Sidebar() {
  return (
    <div className="w-20 min-h-screen">
      <div className="flex flex-col items-center">
        <button className="btn btn-square btn-ghost" title="Home">
          <HomeIcon className="size-6 text-primary" />
        </button>
        <button className="btn btn-square btn-ghost" title="Customer">
          <UsersIcon className="size-6 text-primary" />
        </button>
        <button className="btn btn-square btn-ghost" title="Cat">
          <CatIcon className="size-6 text-primary" />
        </button>
        <button className="btn btn-square btn-ghost" title="Storage">
          <BuildingStorefrontIcon className="size-6 text-primary" />
        </button>
      </div>
    </div>
  );
}
