import { FC } from 'react';
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface MovieCardProps {
  id: number;
  title: string;
  rating: number;
  plot: string;
  released: string;
  poster: string;
  onViewMore: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  rating,
  plot,
  released,
  poster,
  onViewMore,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <article className='bg-[#131925] rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-200'>
      <figure className='relative cursor-pointer'>
        <img
          src={poster}
          alt={title}
          className='w-full h-64 object-cover hover:opacity-75'
        />
        <figcaption className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200'>
          <button onClick={() => onViewMore(id)} className='text-white text-lg font-bold px-4 py-2 bg-black bg-opacity-75 rounded-md'>
            Ver más
          </button>
        </figcaption>
      </figure>
      <section className='relative flex flex-row p-4'>
        <header>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <div className='flex items-center'>
            <Rating
              precision={0.5}
              value={rating}
              max={10}
              readOnly
              size='small'
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#ffeb3b',
                },
                '& .MuiRating-iconEmpty': {
                  color: '#ffffff',
                },
              }}
            />
            <span className='ml-2 text-sm text-gray-100'>{rating}</span>
          </div>
        </header>
        <div className='absolute right-5 cursor-pointer' onClick={() => onToggleFavorite(id)}>
          <FavoriteIcon
            sx={{
              color: isFavorite(id) ? '#ff0004' : '#ffffff',
            }}
          />
        </div>
      </section>
      <footer className='p-4'>
        <p className='text-sm text-gray-100'>{released}</p>
        <p className='text-sm text-gray-200'>{plot}</p>
      </footer>
    </article>
  );
}

export default MovieCard;