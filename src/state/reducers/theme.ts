import { createSlice } from "@reduxjs/toolkit";
import ThemeModes from "./../../enums/theme/modes.ts";

interface InitialProps {
  themes: string[],
  theme: ThemeModes;
}

const initial: InitialProps = {
  theme: "light",
  themes: ThemeModes,
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