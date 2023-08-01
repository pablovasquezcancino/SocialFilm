import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import Logo from "../assets/Logo.jpg";
import UseMediaQuery from "../hooks/UseMediaQuery";

const Navbar = () => {
  // guardamos en una constante una configuracion de tailwind reutilizable jeje
  const flexBetween = "flex items-center justify-between";
  const isDesktop = UseMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav>
      <div
        className={`${flexBetween} sticky top-0 z-30 w-full py-6 bg-transparent`}
      >
        <div className={`${flexBetween} mb-4 mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/** Lado Izquierdo */}
            <Link to="/feed">
              <img
                alt="logo"
                src={Logo}
                className="w-12 h-10 rounded-md object-fill"
              />
            </Link>

            {/** Lado derecho */}
            {/* DESKTOP NAV */}
            {isDesktop ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <h1>Social Film</h1>
                </div>
                <div className={`${flexBetween} gap-8 `}>
                  <input
                    placeholder="Buscar"
                    type="text"
                    className=" text-gray-700 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />

                  <img
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    src={Logo}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            ) : (
              <img
                className="rounded-full w-10 h-10"
                src={Logo}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            )}

            {isDesktop && !isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-yellow-300 w-[300px]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button
                    className="w-7 h-7"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <XMarkIcon />
                  </button>
                </div>
                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-blue-900">
                  <button className="bg-yellow-300 p-2 rounded-md">
                    Perfil
                  </button>
                  <button className="bg-yellow-300 p-2 rounded-md">
                    Log out
                  </button>
                </div>
              </div>
            )}

            {/* MOBILE MENU POPUP */}
            {!isDesktop && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-yellow-300 w-[300px]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button
                    className="w-7 h-7"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <XMarkIcon />
                  </button>
                </div>
                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-blue-900">
                  <button className="bg-yellow-300 p-2 rounded-md">
                    Perfil
                  </button>
                  <button className="bg-yellow-300 p-2 rounded-md">
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
