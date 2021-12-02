import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePokemonName } from "../feature/pokemonName";
import { useGetPokemonByNameQuery } from "../services/pokemon";

export const FavoritePokemon = () => {
  const dispatch = useDispatch();
  const [favoritePokemon, setFavoritePokemon] = useState("");

  const { data, error, isLoading } = useGetPokemonByNameQuery(favoritePokemon);

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
