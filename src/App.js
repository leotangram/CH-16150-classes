import React from "react";
import "./App.css";
import Router from "./router/Router";

// const urlPath = "https://pokeapi.co/api/v2/";

const App = () => {
  // const [number, setNumber] = useState(0);
  // const [characters, setCharacters] = useState([]);
  // const [pokemons, setPokemons] = useState([]);
  // const [limit, setLimit] = useState(1);

  // useEffect(() => {
  //   if (number < 3 && number > 0) {
  //     fetch("https://rickandmortyapi.com/api/character")
  //       .then((response) => response.json())
  //       .then((data) => setCharacters(data.results));
  //   }
  // }, [number]);

  // useEffect(() => {
  //   fetch(`${urlPath}pokemon?limit=${limit}`)
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data.results))
  //     .catch((error) => console.log("error", error));
  // }, [limit]);

  // const handleChangeLimit = (event) => {
  //   setLimit(event.target.value);
  // };

  // const handleNumer = () => setNumber(number - 1);

  return (
    <div className="app-container">
      <Router />
      {/* <input type="number" value={limit} onChange={handleChangeLimit} />
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul> */}
      {/* <button type="button" onClick={handleNumer}>
        Restar
      </button>
      <h1>{number}</h1>
      <button type="button" onClick={() => setNumber(number + 1)}>
        Sumar
      </button> */}
    </div>
  );
};

export default App;
