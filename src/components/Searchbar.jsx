import React, { useState } from 'react';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Logic to handle the search query (e.g., API call, filtering results)
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="flex justify-center py-6">
      <form
        onSubmit={handleSearchSubmit}
        className="flex w-full max-w-xl rounded-lg shadow-2xl p-4 items-center transition-transform duration-500 ease-in-out transform hover:scale-105"
      >
        <input
          type="text"
          placeholder="Start Typing Ticker Name, User, or Trader"
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-1 px-6 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black rounded-l-xl transition duration-300 ease-in-out transform hover:shadow-xl"
        />
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-r-xl text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
