import axios from "axios"

export async function getServerSideProps(context) {
    const { imdbID } = context.query

    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=f5bbb04b&i=${imdbID}`)

    return {
        props: {
            individualMovie: data
        }
    }
}

export default function MoviesById({ individualMovie }) {
    console.log(individualMovie)
    return (
        <div className="w-[100%] h-[100vh] bg-red-50 flex items-center justify-center">
            <div className="container__left--side">
                <h1 className="text-center font-bold">
                    {individualMovie.Title}
                </h1>
                <div className="flex justify-between">
                    <span>{individualMovie.Rated}</span>
                    <span>{individualMovie.Year}</span>
                    <span>{individualMovie.Genre}</span>
                    <span>{individualMovie.Runtime}</span>
                </div>
                <h2>{individualMovie.Plot}</h2>
            </div>
            <figure className="container__right--side">
                <img src={individualMovie.Poster}/>
            </figure>
        </div>
    )
}