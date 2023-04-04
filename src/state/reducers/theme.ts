import { createSlice } from "@reduxjs/toolkit";

const initial = {
  themes: [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter"
  ],
  theme: "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initial,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;