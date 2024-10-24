// // src/App.jsx

// //MDN Docks helped with the handlefunction since I didn't have a proper example on it for this unit

import { useState } from "react";

import "./App.css";

const App = () => {

  const [team, setTeam] = useState([]);

  const [money, setMoney] = useState(100);

  const zombieFighters = [
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ];

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      alert("No money to add this fighter.");
      console.log("No money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((f) => f.name !== fighter.name));
    setMoney(money + fighter.price);
  };

  return (
    <div className="app">
      <h1>Zombie Fighters</h1>
      <h2>Current Money: ${money}</h2>
      <ul className="fighter-list">
        {zombieFighters.map((fighter, index) => (
          <li key={index} className="fighter-item">
            <img
              src={fighter.img}
              alt={fighter.name}
              className="fighter-image"
            />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>
              Add to Team
            </button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      <ul className="team-list">
        {team.map((fighter, index) => (
          <li key={index} className="team-item">
            {fighter.name}
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>
              Remove from Team
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
