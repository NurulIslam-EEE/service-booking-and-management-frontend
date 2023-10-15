import { baseApi } from "./api/baseApi";
import sidebarReducer from "./slices/sidebarSlice";

export const rootReducer = {
  sidebar: sidebarReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
