import React, { useContext } from "react";
import { MoviesContext } from "../Provider/Context";
import Img1 from "../../src/assets/Notice.jpg";
import Img2 from "../../src/assets/Manifest.jpg";
import Img3 from "../../src/assets/ceptir.jpg";
import Img4 from "../../src/assets/paracite.jpg";
import { IoBagAddOutline } from "react-icons/io5";
import Hero from '../Pages/Hero';

const predefinedMovies = [
  {
    id: 1,
    title: "Red Notice",
    genre: "Action",
    year: 2021,
    Img: Img1,
  },
  {
    id: 2,
    title: "Manifest",
    genre: "Mystery",
    year: 2020,
    Img: Img2,
  },
  {
    id: 3,
    title: "Interceptor",
    genre: "Thriller",
    year: 2020,
    Img: Img3,
  },
  {
    id: 4,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    Img: Img4,
  },
  {
    id: 1,
    title: "Red Notice",
    genre: "Action",
    year: 2021,
    Img: Img1,
  },
  {
    id: 2,
    title: "Manifest",
    genre: "Mystery",
    year: 2020,
    Img: Img2,
  },
  {
    id: 3,
    title: "Interceptor",
    genre: "Thriller",
    year: 2020,
    Img: Img3,
  },
  {
    id: 4,
    title: "Parasite",
    genre: "Thriller",
    year: 2019,
    Img: Img4,
  },
];

const MoviesList = () => {
  const { addFavorite } = useContext(MoviesContext);

  return (
    <>      
      <Hero />
      <div id="movies-list" className="bg-gray-100 min-h-screen p-6 mt-10">
        <h1 className="text-3xl font-bold text-left underline text-gray-800 mb-10">Movies</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {predefinedMovies.map((movie) => (
            <li
              key={movie.id}
              className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src={movie.Img}
                alt={movie.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{movie.title}</h2>
                <p className="text-sm text-gray-600 flex justify-between">
                  <p><b>Genre:</b> {movie.genre}</p>
                  <p><b>Year:</b> {movie.year}</p>
                </p>
                <button
                  onClick={() => addFavorite(movie)}
                  className="mt-4 w-full bg-black text-red-600 py-2 px-4 flex justify-center rounded hover:bg-red-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                >
                  <b><IoBagAddOutline size={28} /></b>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoviesList;
