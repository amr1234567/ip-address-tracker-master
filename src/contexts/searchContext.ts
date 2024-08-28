import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Root } from "../models/locationModel";

const API_KEY = "at_jYW26uLOlsYOvc2MyQZ9T1ssK9FtL";

const fetchInitialLocation = createAsyncThunk("search/fetchInitialLocation", async () => {
   const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`);
   const data: Root = await response.json();
   return data;
})


const fetchLocationByIp = createAsyncThunk("search/fetchLocationByIp", async (ip: string) => {
   const response = await fetch(`
https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`);
   const data: Root = await response.json();
   return data;
})


const initialState: Root = {
   ip: "",
   location: {
      country: "",
      region: "",
      timezone: "",
      city: "",
      geonameId: 0,
      lat: 0,
      lng: 0,
      postalCode: ""
   },
   domains: [],
   as: {
      asn: 0,
      domain: "",
      name: "",
      route: "",
      type: "",
   },
   isp: "",
}

const SearchContext = createSlice({
   name: "search",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchInitialLocation.fulfilled, (_state, action) => {
         return action.payload;
      });
      builder.addCase(fetchLocationByIp.fulfilled, (_state, action) => {
         return action.payload;
      });
   }
})



export default SearchContext.reducer;
export { fetchInitialLocation, fetchLocationByIp }