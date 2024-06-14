import Link from "next/link";

export default function MovieCard({ movieData }) {
  return (
    <>
      {movieData?.map((movie) => (
        <Link href={`/movieID/${movie.imdbID}`} key={movie.imdbID}>
          <div >
            <figure>
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
          </div>
        </Link>
      ))}
    </>
  );
}
