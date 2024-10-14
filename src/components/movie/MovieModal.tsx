import  { FC } from 'react';
import { Movie } from '../../types/movie';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: FC<MovieModalProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <img src={movie.metadata.poster} alt={movie.title} className="mb-4 w-full h-auto" />
        <p className="mb-4">{movie.plot}</p>
        <p className="mb-4"><strong>Released:</strong> {movie.releaseInfo.released}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieModal;