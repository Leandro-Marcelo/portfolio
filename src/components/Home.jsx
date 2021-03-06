import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full  h-screen bg-[#0a192f]">
      {/* Container */}
      {/* el mx-auto es como un margin 0 auto */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* el color dependerá del logo */}
        <p className="text-pink-600">Hola, mi nombre es</p>
        {/* @media (min-width: 640px) === sm  */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Leandro Marcelo
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Soy un programador Full Stack muy dedicado y motivado en brindar
          soluciones, aplicando lógica y buscando métodos resolutivos acordes.
          Me gustan los desafíos, ya que implican un constante aprendizaje, sea
          con un cambio de paradigma o una nueva tecnología.
        </p>
        <div>
          {/* py es padding top y bottom, my es margin top y bottom */}

          <Link to="work" offset={-70} smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Proyectos{" "}
              {/* aquí le agrega el group porque el hover rota la flecha pero solo considerando el hitbox de la flecha y no el buttom entero. */}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
