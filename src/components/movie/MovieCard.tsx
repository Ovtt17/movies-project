import { FC } from 'react';

interface MovieCardProps {
  id: number;
  title: string;
  plot: string;
  released: string;
  poster: string;
  onViewMore: (id: number) => void;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  plot,
  released,
  poster,
  onViewMore,
}) => {
  return (
    <div className='cursor-pointer bg-[#131925] rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-200'>
      <div className='relative'>
        <img
          src={poster}
          alt={title}
          className='w-full h-64 object-cover hover:opacity-75'
        />
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200'>
          <button onClick={() => onViewMore(id)} className='text-white text-lg font-bold px-4 py-2 bg-black bg-opacity-75 rounded-md'>
            Ver más
          </button>
        </div>
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-sm text-gray-100'>{released}</p>
        <p className='text-sm text-gray-200'>{plot}</p>
      </div>
    </div>
  );
}

export default MovieCard;