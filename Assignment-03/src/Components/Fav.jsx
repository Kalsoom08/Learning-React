import React, { useContext } from "react";
import { MoviesContext } from "../Provider/Context";
import { IoMdRemoveCircleOutline } from "react-icons/io";



const FavoriteMovies = () => {
  const { favoriteMovies, removeFavorite } = useContext(MoviesContext);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-left underline  text-gray-800 mb-10">Favorite Movies</h1>
      {favoriteMovies.length === 0 ? (
        <p className="text-center text-gray-600">List is Empty!</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteMovies.map((movie) => (
            <li
              key={movie.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
            >
              <img
                src={movie.Img}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">{movie.title}</h2>
                <p className="text-sm text-gray-600">
                  {movie.genre}, {movie.year}
                </p>
                <button
                  onClick={() => removeFavorite(movie.id)}
                  className="mt-4 w-full bg-red-500 text-white py-2 px-4  flex justify-center
                  rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
                >
                  <IoMdRemoveCircleOutline size={28}/>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;
