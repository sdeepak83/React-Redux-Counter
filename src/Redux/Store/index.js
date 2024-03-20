import { configureStore } from "@reduxjs/toolkit";
import Counter from "../Slice/Counter";

const store = configureStore({
  reducer: {
    counter: Counter,
  },
});

export default store;
