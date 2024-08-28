import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import searchContext from "../contexts/searchContext";


const ApplicationStore = configureStore({
   reducer: {
      search: searchContext,
   }
})



export default ApplicationStore;
export type AppDispatch = typeof ApplicationStore.dispatch;
export type AppType = typeof ApplicationStore;
export type RootState = ReturnType<typeof ApplicationStore.getState>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();