import { useState } from 'react';
import movies from '../../data/movies';
import MovieCard from './MovieCard';
import { Movie } from '../../types/movie';
import MovieModal from './MovieModal';
import useFavoriteMovies from '../../hooks/useFavoriteMovies';

const ListMovie = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();

  const handleViewMore = (id: number) => {
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) return;
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleToggleFavorite = (id: number) => {
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) return;
    setFavoriteMovies((prevMovies) => {
      const isFavorite = prevMovies.some((movie) => movie.id === id);
      const updatedFavorites = isFavorite
        ? prevMovies.filter((movie) => movie.id !== id)
        : [...prevMovies, movie];

      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };

  const isFavorite = (id: number) => {
    return favoriteMovies.some((movie) => movie.id === id);
  };

  const movieList = movies.map((movie) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      rating={movie.imdb.rating}
      plot={movie.plot}
      released={movie.releaseInfo.released}
      poster={movie.metadata.poster}
      onViewMore={handleViewMore}
      onToggleFavorite={handleToggleFavorite}
      isFavorite={isFavorite}
    />
  ));

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Lista de Películas</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {movieList}
      </div>

      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default ListMovie;