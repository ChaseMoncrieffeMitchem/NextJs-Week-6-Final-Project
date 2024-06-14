import MovieCard from "@/components/movieCard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
    const { id } = context.params;
  
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=f5bbb04b`
    );
  
    return {
      props: {
        movieData: data,
      },
    };
  }

export default function TitleSearch({ movieData }) {
  const router = useRouter()
  const [movies, setMovies] = useState()
  console.log(movieData)
  const { title } = router.query

  async function fetchMoviesByTitle() {
    const { data } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f5bbb04b&s=${title || "fast"}`)
    setMovies(data)
    console.log(data)
  }

  useEffect(() => {
    fetchMoviesByTitle()
  }, [])
  return (
    <>
    <Link href={`/`}>
        <button>Back</button>
      </Link>
      <MovieCard movieData={movieData} movies={movies}/>
    </>
  );
}
