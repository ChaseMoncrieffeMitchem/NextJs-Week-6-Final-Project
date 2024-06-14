export default function MovieCard({ movieData }) {
  return (
    <>
      <div>
        <figure>
          <img src={movieData.Poster} />
        </figure>
      </div>
    </>
  );
}
