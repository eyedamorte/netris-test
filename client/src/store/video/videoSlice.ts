import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VideoState } from "./types";

const sliceName = "video";

const initialState: VideoState = {
  selectedTime: 0,
  isPaused: true,
};

const videoSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    switchIsPaused: (state) => {
      state.isPaused = !state.isPaused;
    },
    setSelectedTime: (
      state,
      action: PayloadAction<VideoState["selectedTime"]>
    ) => {
      state.selectedTime = action.payload;
    },
  },
});

export const { setSelectedTime } = videoSlice.actions;

export const videoReducer = videoSlice.reducer;
