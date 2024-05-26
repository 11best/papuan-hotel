import {
  HomeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import CatIcon from "./Icons/CatIcon";

export default function Sidebar() {
  return (
    <div>
      <button className="btn btn-square btn-ghost">
        <HomeIcon className="size-6 text-primary" />
      </button>
      <button className="btn btn-square btn-ghost">
        <UsersIcon className="size-6 text-primary" />
      </button>
      <button className="btn btn-square btn-ghost">
        <BuildingStorefrontIcon className="size-6 text-primary" />
      </button>
      <button className="btn btn-square btn-ghost">
        <CatIcon className="size-6 text-primary" />
      </button>
    </div>
  );
}
