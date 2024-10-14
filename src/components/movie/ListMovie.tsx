import movies from '../../data/movies';
import MovieCard from './MovieCard';

const ListMovie = () => {
  const handleViewMore = () => {
    alert('Ver más');
  }

  const movieList = movies.map((movie) => (
    <MovieCard
      key={movie.imdb.id}
      title={movie.title}
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
    </div>
  );
}

export default ListMovie;