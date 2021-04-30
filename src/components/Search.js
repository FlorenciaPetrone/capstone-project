//State and Context
import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Search = () => {
  const [userInput, setUserInput] = useState("");
  const { requestConfig, setRequestConfig } = useContext(Context);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Write a theme"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="button-hover"
        disabled={!userInput.length}
        onClick={() =>
          setRequestConfig({
            query: userInput,
            page: 1,
            per_page: 80,
          })
        }
      >
        Search
      </button>
    </div>
  );
};

export default Search;
