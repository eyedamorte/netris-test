import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VideoEventsState } from "./types";
import { Event } from "../../types";
import { parseAndSortVideoEvents } from "../../utils/parseVideoEvents";

const sliceName = "videoEvents";

const initialState: VideoEventsState = {
  videoEvents: null,
  pending: false,
};

export const getVideoEventsAsyncThunk = createAsyncThunk(
  `${sliceName}/getEventsList`,
  () => {
    return fetch("https://run.mocky.io/v3/86ba5ad4-c45e-4f3d-9a07-83ce9a345833")
      .then((result) => {
        return result.json();
      })
      .catch((err) => {
        console.error(err);
      });
  }
);

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideoEventsAsyncThunk.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(
      getVideoEventsAsyncThunk.fulfilled,
      (state, action: PayloadAction<Event[]>) => {
        state.videoEvents = parseAndSortVideoEvents(action.payload);

        state.pending = false;
      }
    );
  },
});

export const videoEventsReducer = authSlice.reducer;
