import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MoviesProvider } from "../src/Provider/Context";
import MoviesList from "../src/Components/List";
import FavoriteMovies from "../src/Components/Fav";

const App = () => {
  return (
    <MoviesProvider>
      <Router>
        <div className="bg-gray-100 min-h-screen flex flex-col">
          <nav className="bg-black text-red-500 py-4">
            <div className="container mx-auto flex justify-center space-x-4">
              <Link
                to="/"
                className="text-lg font-medium hover:underline hover:text-purple-300"
              >
                Movies &nbsp; |
              </Link>
              <Link
                to="/favorites"
                className="text-lg font-medium hover:underline hover:text-purple-300"
              >
              Favorites
              </Link>
            </div>
          </nav>
          <main className="flex-grow container mx-auto p-6">
            <Routes>
              <Route path="/" element={<MoviesList />} />
              <Route path="/favorites" element={<FavoriteMovies />} />
            </Routes>
          </main>
          {/* <footer className="bg-black text-red-600 py-4 text-center">
            <p className="text-sm">&copy; 2024 Movie App. All rights reserved.</p>
          </footer> */}
        </div>
      </Router>
    </MoviesProvider>
  );
};

export default App;
