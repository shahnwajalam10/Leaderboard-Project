import React, { useState, useEffect } from "react";
import Trader from "./components/Trader";
import KeyMetrics from "./components/KeyMetrics";
import LeaderBoardTable from "./components/LeaderBoardTable";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
function App() {
  const [traderData, setTraderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/ck1eylk0jd4v6");
        const data = await response.json();
        setTraderData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trader data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);


  const handleTrophyFilter = (trophyType) => {
    setSelectedTrophy(trophyType);
    if (trophyType === "All") {
      setFilteredTraders(traderData);
    } else {
      const filtered = traderData.filter(
        (trader) => trader.trophies === trophyType
      );
      setFilteredTraders(filtered);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const leaderboardData = [
    {
      name: "Roger Korsgaard",
      avatar: "path/to/avatar1.jpg",
      tradingStyle: "Day Trader",
      streaks: 14,
      alerts: "20 / 90%",
      trades: "497 / 90%",
      averageGain: 90,
      xscore: 83,
      trophies: "🥇",
    },
    {
      name: "Charlie Herwitz",
      avatar: "path/to/avatar2.jpg",
      tradingStyle: "Swing Trader",
      streaks: 13,
      alerts: "18 / 85%",
      trades: "359 / 85%",
      averageGain: 85,
      xscore: 80,
      trophies: "🥈",
    },
    {
      name: "Ahmad Mango",
      avatar: "path/to/avatar3.jpg",
      tradingStyle: "Short Bias",
      streaks: 15,
      alerts: "15 / 80%",
      trades: "248 / 80%",
      averageGain: 80,
      xscore: 75,
      trophies: "🥉",
    },
  ];

  const metricsData = [
    {
      title: "Most Tips Given",
      icon: "path/to/icon1.svg",
      value: 129,
      description: "Cristofer G.",
    },
    {
      title: "Most Active",
      icon: "path/to/icon2.svg",
      value: 37,
      description: "Roger K.",
    },
    {
      title: "Longest Streak",
      icon: "path/to/icon3.svg",
      value: 12,
      description: "Dane P.",
    },
    {
      title: "Rank Change",
      icon: "path/to/icon4.svg",
      value: 7,
      description: "Nolan F.",
    },
  ];

  const tradersData = [
    {

      name: 'Roger Korsgaard',
      avatar: 'https://img.favpng.com/13/10/14/steve-clarkson-character-animation-male-png-favpng-PSDJvmKH5vjg9dajWT6sAVc9s.jpg',
      tradingStyle: 'Day Trader',
      streaks: 14,
      alerts: '20 / 90%', 
      trades: '497 / 90%', 
      averageGain: 90,
      xscore: 83,
      trophies: '🥇',
    },
    {

      name: 'Charlie Herwitz',
      avatar: 'https://img.favpng.com/11/7/5/pixel-art-drawing-art-game-character-animation-png-favpng-4kk0ZkiGxyz1XXT8FpHiKJ4qy.jpg',
      tradingStyle: 'Swing Trader',
      streaks: 13,
      alerts: '18 / 85%',
      trades: '359 / 85%',
      averageGain: 85,
      xscore: 80,
      trophies: '🥈',
    },
    {

      name: 'Ahmad Mango',
      avatar: 'https://img.favpng.com/23/22/22/cartoon-green-clip-art-fictional-character-animation-png-favpng-Zf6VhABLqfqzZdKfExPPk8Uq2.jpg',
      tradingStyle: 'Short Bias',
      streaks: 15,
      alerts: '15 / 80%', 
      trades: '248 / 80%',
      averageGain: 80,
      xscore: 75,
      trophies: '🥉',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Navbar/>
      <Searchbar/>
      <div className="flex space-x-4 mb-4">
        {[].map((trophy) => (
          <button
            key={trophy}
            onClick={() => handleTrophyFilter(trophy)}
            className={`px-4 py-2 border rounded shadow-md transition-all duration-200 ${
              selectedTrophy === trophy
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-blue-100"
            }`}
          >
            {trophy}
          </button>
        ))}
      </div>
      <Trader traders={tradersData.slice(0, 3)} />
      <KeyMetrics metrics={metricsData} />
      <LeaderBoardTable traders={leaderboardData} />
    </div>
  );
}

export default App;
