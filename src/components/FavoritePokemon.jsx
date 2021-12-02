import { useState } from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";

export const FavoritePokemon = () => {
  const [favoritePokemon, setFavoritePokemon] = useState("");

  const { data } = useGetPokemonByNameQuery(favoritePokemon);

  return (
    <div>
      <p>White your favorite pokemon?</p>
      <input
        type="text"
        onChange={event => setFavoritePokemon(event.target.value)}
      />
      <img src={data?.sprites?.front_default} alt={data.id} />
    </div>
  );
};
