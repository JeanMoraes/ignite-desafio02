
import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface MovieItem {
    imdbID: string;
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{ Value: string }>
}
interface ContentProps {
  selectedGenre: string
  movies: Array<MovieItem>
}

export function Content({ movies, selectedGenre}: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}