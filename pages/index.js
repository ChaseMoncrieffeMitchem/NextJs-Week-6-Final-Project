import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchTitle, setSearchTitle] = useState(``);

  const onSearch = () => {
    window.location = `/movies/${searchTitle}`;
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-red-400 flex items-center justify-center">
        <div className="flex flex-col">
          <label className="text-center">Search by Movie Title: </label>
          <input
            type="text"
            value={searchTitle}
            onChange={(event) => setSearchTitle(event.target.value)}
            onKeyPress={(event) => event.key === "Enter" && onSearch()}
          />
          <button onClick={onSearch}>Enter</button>
        </div>
      </div>
    </>
  );
}
