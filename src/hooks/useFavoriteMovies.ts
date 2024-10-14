import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  title: string;
  year: number;
}

const useFavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteMovies');
    if (storedFavorites) {
      setFavoriteMovies(JSON.parse(storedFavorites));
    }
  }, []);

  return {favoriteMovies, setFavoriteMovies};
};

export default useFavoriteMovies;