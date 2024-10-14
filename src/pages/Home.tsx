import ListMovie from '../components/movie/ListMovie';
import movies from '../data/movies';

const Home = () => {
  return (
    <section>
      <ListMovie movies={movies} />
    </section>
  );
}

export default Home;