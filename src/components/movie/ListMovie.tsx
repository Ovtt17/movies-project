import { useState } from 'react';
import movies from '../../data/movies';
import MovieCard from './MovieCard';
import { Movie } from '../../types/movie';
import MovieModal from './MovieModal';

const ListMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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