import  { FC, useEffect } from 'react';
import { Movie } from '../../types/movie';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: FC<MovieModalProps> = ({ movie, onClose }) => {

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
      <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white px-2 py-2 rounded hover:bg-gray-700"
        >
          <CloseFullscreenIcon />
        </button>
        <h2 className="text-xl font-bold mb-3">{movie.title}</h2>
        <img src={movie.metadata.poster} alt={movie.title} className="mb-4 w-full h-60 object-cover" />
        <div className="px-6 py-3">
          <p className="mb-3">{movie.plot}</p>
          <p className="mb-2"><strong>Released:</strong> {movie.releaseInfo.released}</p>
          <p className="mb-2"><strong>Runtime:</strong> {movie.releaseInfo.runtime}</p>
          <p className="mb-2"><strong>Genre:</strong> {movie.releaseInfo.genre}</p>
          <p className="mb-2"><strong>Language:</strong> {movie.releaseInfo.language}</p>
          <p className="mb-2"><strong>Country:</strong> {movie.releaseInfo.country}</p>
          <p className="mb-2"><strong>Director:</strong> {movie.credits.director}</p>
          <p className="mb-2"><strong>Writer:</strong> {movie.credits.writer}</p>
          <p className="mb-2"><strong>Actors:</strong> {movie.credits.actors}</p>
          <p className="mb-2"><strong>Awards:</strong> {movie.metadata.awards}</p>
          <p className="mb-2"><strong>IMDB Rating:</strong> {movie.imdb.rating}</p>
          <p className="mb-2"><strong>IMDB Votes:</strong> {movie.imdb.votes}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;