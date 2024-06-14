import MovieCard from "@/components/movieCard";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
    const { title } = context.query;
    
  
    const { data } = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=f5bbb04b&s=${title}`
    );

    console.log(data.Search)
  
    return {
      props: {
        movieData: data.Search || [],
      },
    };
  }

export default function TitleSearch({ movieData }) {
    console.log(movieData)
  return (
    <>
    <Link href={`/`}>
        <button>Back</button>
      </Link>
      <MovieCard movieData={movieData}/>
    </>
  );
}
