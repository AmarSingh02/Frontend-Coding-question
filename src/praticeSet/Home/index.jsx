import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  const InitialArr = [
    "car", "bike", "bus", "train", "truck", "bicycle", "van", "scooter",
    "plane", "boat", "apple", "banana", "mango", "orange", "grape",
    "pineapple", "watermelon", "kiwi", "strawberry", "blueberry", "fruits",
    "vegetables", "chair", "table", "laptop", "mobile", "keyboard", "mouse",
    "charger", "headphones", "television"
  ];

  const [inputText, setInputText] = useState("");
  const searchText = typeof inputText === "string" ? inputText.toLowerCase() : "";
  const filteredSuggestions = InitialArr.filter(item =>
    item.toLowerCase().includes(searchText)
  );

  const handleSuggestionClick = (item) => {
    setInputText(item);
  };

  useEffect(()=>{
   
    const pokeApi= async()=>{
      try {
         const {data}=await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10`);
 console.log("Api got called",data.results);

      const results = data.results;

             const detailedData = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return {
            name: res.data.name,
              abilities: res.data.abilities.map(a => a.ability.name),
              exp:res.data.base_experience
             
            };
          })
        );

        setPokemonList(detailedData);



      } catch (error) {
        console.log(error)
      }
      finally{
        setLoading(false)
      }
     
    }
    pokeApi()

  },[])
  
  return (
    <div style={{ padding: "20px" }}>
      {/* Autocomplete Search */}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "8px", width: "200px" }}
      />

      <div style={{ marginTop: "10px", border: "1px solid #ccc", width: "200px" }}>
        {searchText && filteredSuggestions.length > 0 && (
          filteredSuggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(item)}
              style={{
                padding: "5px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {item}
            </div>
          ))
        )}
        {searchText && filteredSuggestions.length === 0 && (
          <div style={{ padding: "5px", color: "gray" }}>No suggestions found</div>
        )}
      </div>

     
      <h2 style={{ marginTop: "20px" }}>Pokémon List (Abilities)</h2>
 

 {pokemonList.map((item, index)=>{
  return(
    <>
    <li key={index}>
      <strong>name: {item.name}</strong>  

      <ul>
              {item.abilities.map((ability, i) => (
                <li key={i}>{ability}</li>
              ))}
            </ul>
            <strong> experience{item.exp}</strong>


    </li>
    </>
  )
 })}
    </div>
  );
};

export default Home;
