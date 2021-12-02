import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const pokemonNameSlice = createSlice({
  name: "pokemonName",
  initialState: { value: initialStateValue },
  reducers: {
    changePokemonName: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changePokemonName } = pokemonNameSlice.actions;
export default pokemonNameSlice.reducer;
