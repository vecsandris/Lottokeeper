import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/nav.tsx";
import "./App.css";

function Landing() {
  return (
    <>
    <Nav/>
      <div className="flex lg:flex-row flex-col lg:justify-left items-center h-screen lg:p-32 p-8 gap-8 lg:text-left text-center">
        <div className="flex flex-col gap-4 lg:items-start items-center">
          <h1 className="text-customRed lg:text-6xl text-5xl font-poppins lg:w-3/4">
            Discover our games and play more
          </h1>
          <p className="lg:text-md text-2xl text-white lg:w-3/4">
            Enter the world of high-stakes thrills and unpredictable fortunes
            with our captivating gambling game, where luck and strategy collide
            for an exhilarating experience like no other.
          </p>
          <a
            href="/game"
            className="rounded-lg bg-customRed text-white p-4 lg:w-32 w-44 text-center hover:scale-110 ease-in duration-300 lg:text-xl text-2xl"
          >
            Play game
          </a>
        </div>
        <img src="game-die.svg" alt="cube" className="lg:h-96 h-64"/>
      </div>
    </>
  );
}

export default Landing;
