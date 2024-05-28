import { configureStore } from "@reduxjs/toolkit";

import { videoReducer } from "./video";
import { videoEventsReducer } from "./videoEvents";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    videoEvents: videoEventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
