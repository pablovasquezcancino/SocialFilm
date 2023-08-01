import { React, useState } from "react";
import {
  BookOpenIcon,
  Bars3Icon,
  Bars3BottomRightIcon,
  XMarkIcon,
  BellIcon,
  FilmIcon,
} from "@heroicons/react/24/solid";
import Login from "../pages/Login";
import UseMediaQuery from "../hooks/UseMediaQuery.jsx";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  // guardamos en una constante una configuracion de tailwind reutilizable jeje
  const flexBetween = "flex items-center justify-between";
  const isDesktop = UseMediaQuery("(min-width: 768px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-transparent`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/** Lado Izquierdo */}
            <Link to='/'>
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
                  <Link to="/login">
                    <button className="bg-yellow-300 p-2 rounded-md">
                      Sign in
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-yellow-300 p-2 rounded-md">
                      Registrarse
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full w-7 h-7 bg-yellow-300 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="text-purple-600" />
              </button>
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
                    Sign in
                  </button>
                  <button className="bg-yellow-300 p-2 rounded-md">
                    Registrarse
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

export default HomeNavbar;
