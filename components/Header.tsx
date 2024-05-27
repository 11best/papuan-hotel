import { UserCircleIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";

export default function Sidebar() {
  const currentDate = dayjs(new Date()).format("dd DD MMM YYYY HH:mm");
  return (
    <div className="w-full min-w-full flex justify-end">
      <div className="dropdown dropdown-end">
        <button
          tabIndex={0}
          role="button"
          className="btn btn-ghost flex"
          title="Home"
        >
          <UserCircleIcon className="size-8 text-primary" />
          <div className="text-left">
            <p>papuan namename</p>
            <p className="text-xs mt-1">{currentDate}</p>
          </div>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
