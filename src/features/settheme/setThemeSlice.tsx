import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

interface InitialStateProps {
  mode: string;
}

const initialState: InitialStateProps = {
  mode: "light",
};

export const themeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default themeSlice.reducer;
