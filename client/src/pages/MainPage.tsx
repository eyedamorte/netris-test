import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, getVideoEventsAsyncThunk } from "../store";
import { EventsList } from "../components";
import { useEffect } from "react";
import { sxProp } from "../types";
import { Player } from "../components";

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  console.log("fe");

  const { eventsList, pending } = useSelector((state: RootState) => ({
    eventsList: state.videoEvents.videoEvents,
    pending: state.videoEvents.pending,
  }));

  useEffect(() => {
    dispatch(getVideoEventsAsyncThunk());
  }, [dispatch]);

  if (!eventsList || pending) {
    return "wait";
  }

  return (
    <div style={mainPageStyles}>
      <Player events={eventsList} />
      <EventsList {...{ eventsList }} />
    </div>
  );
};

const mainPageStyles: sxProp = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
