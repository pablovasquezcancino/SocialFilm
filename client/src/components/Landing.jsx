import React from "react";
import UseMediaQuery from "../hooks/UseMediaQuery";
import image from "../assets/pierrot.jpg";

const Landing = () => {
  const isAboveLarge = UseMediaQuery("(min-width: 1060px)");
  return (
    <div className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div>
            <img
              src={image}
              alt=""
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[800px] md:max-w-[600px] rounded-md"
            />
          </div>
        ) : (
          <img
            src={image}
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-md"
          />
        )}
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 m-12 md:mt-32 bg-blue-900">
        <p className="text-6xl font-playfair z-10 text-center md:text-start text-yellow-300">
          Social {""}
          <span
            className="xs:relative xs:text-blue   xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[15px] before:-top-[70px] before:z-[-1]"
          >
            Film
          </span>
        </p>

        <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Hola, mi nombre es Pablo Vásquez y soy full stack developer. Tengo
          conocimientos de Javascript, usando react, node y express.
        </p>
      </div>
    </div>
  );
};

export default Landing;
