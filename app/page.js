"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  // sigma quotes
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Function to fetch the stoic quote from the API
  const fetchStoicQuote = async () => {
    try {
      const response = await fetch(
        "https://api.themotivate365.com/stoic-quote"
      );
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching stoic quote:", error);
    }
  };

  useEffect(() => {
    fetchStoicQuote();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-5xl"> SigmaNow.</h1>
      </div>

      <div className="flex flex-col items-center max-w-md overflow-auto mt-32 text-2xl">
        <p>"{quote}"</p>
        <p>- {author}</p>
      </div>

      <div className="column text-center">
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=1171909325/size=small/bgcol=333333/linkcol=0f91ff/track=978649119/transparent=true/"
          seamless
        >
          <a href="https://crystalcastles.bandcamp.com/album/iii">
            III by Crystal Castles
          </a>
        </iframe>
        <button
          onClick={fetchStoicQuote}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-8"
        >
          <h2 className="mb-10 text-1xl font-semibold">New quote.</h2>
        </button>
        <div className="mb-32 flex text-center">
          <a
            href="https://github.com/sydylan"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold`}>GitHub</h2>
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-sy/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold`}>LinkedIn</h2>
          </a>
          <a
            href="https://twitter.com/mythicaldylan"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-1xl font-semibold`}>Twitter</h2>
          </a>
        </div>
      </div>
    </main>
  );
}
