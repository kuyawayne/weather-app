import { createSlice } from "@reduxjs/toolkit";

interface InitialProps {
  themes: string[],
  theme: "light" | "dark" | "cupcake" | "bumblebee" | "emerald" | "corporate" | "synthwave" | "retro" | "cyberpunk" | "valentine" | "halloween" | "garden" | "forest" | "aqua" | "lofi" | "pastel" | "fantasy" | "wireframe" | "black" | "luxury" | "dracula" | "cmyk" | "autumn" | "business" | "acid" | "lemonade" | "night" | "coffee" | "winter";
}

const initial: InitialProps = {
  theme: "cyberpunk",
  themes: ["acid", "aqua", "autumn", "black", "bumblebee", "business", "coffee", "corporate", "cmyk", "cyberpunk", "dracula", "emerald", "fantasy", "forest", "garden", "halloween", "lemonade", "light", "lofi", "luxury", "night", "pastel", "retro", "synthwave", "valentine", "wireframe", "winter"],
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