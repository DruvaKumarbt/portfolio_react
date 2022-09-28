import React from "react";
import covid19 from "../assets/portfolio/covid19.png";
import entertainment from "../assets/portfolio/entertainment.png";
import messanger from "../assets/portfolio/messanger.png";
import portfolio from "../assets/portfolio/portfolio.png";
import shopping from "../assets/portfolio/shopping.png";
import tictactoe from "../assets/portfolio/tictactoe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: covid19,
      alt: "Covid Application",
      demo: "https://druvakumarbt.github.io/covid19/",
      code: "https://github.com/DruvaKumarbt/covid19.git",
    },
    {
      id: 2,
      src: entertainment,
      alt: "Movie Application",
      demo: "https://react-entertainment-dk.netlify.app",
      code: "https://github.com/DruvaKumarbt/react-entertainment.git",
    },
    {
      id: 3,
      src: messanger,
      alt: "Chat Application",
      demo: "https://react-messanger-dk.netlify.app",
      code: "https://github.com/DruvaKumarbt/react-messanger.git",
    },
    {
      id: 4,
      src: portfolio,
      alt: "Old Portfolio",
      demo: "https://druvakumarbt.github.io/portfolio/",
      code: "https://github.com/DruvaKumarbt/portfolio.git",
    },
    {
      id: 5,
      src: shopping,
      alt: "Shopping Application",
      demo: "https://react-shopping-dk.netlify.app",
      code: "https://github.com/DruvaKumarbt/react-shopping.git",
    },
    {
      id: 6,
      src: tictactoe,
      alt: "Game",
      demo: "https://tictactoe-dk.netlify.app",
      code: "https://github.com/DruvaKumarbt/React-TicTacToe.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, alt, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
