import logo from "../images/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div>
        <img className="object-contain h-11" src={logo} alt="" />
      </div>
      <ul className="flex">
        <li className="mr-6">
          <Link
            className="text-neutral-200 hover:text-gray-800 hover:bg-neutral-400 transition-all hover:transition-all p-2 rounded-md text-xl"
            to="/"
          >
            Inicio
          </Link>
        </li>
        <li className="mr-6">
          <Link           className="text-neutral-200 hover:text-gray-800 hover:bg-neutral-400 transition-all hover:transition-all p-2 rounded-md text-xl"
            to="/AboutUs"
          >
            Acerca del Proyecto
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="text-neutral-200 hover:text-gray-800 hover:bg-neutral-400 transition-all hover:transition-all p-2 rounded-md text-xl"
            to="/Preview"
          >
            MWS Preview
          </Link>
        </li>
      </ul>
    </nav>
  );
};
