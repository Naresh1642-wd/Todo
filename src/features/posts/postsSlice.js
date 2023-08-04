import { createSlice } from "@reduxjs/toolkit";
import { Blogdata } from "../../Components/Blogdata.js";

const postSlice = createSlice({
  name: "posts",
  initialState: Blogdata,
  reducers: {
    addPosts: (state, action) => {
      state.push(action.payload);
    },
    updatePosts: (state, action) => {
      const { id, Content } = action.payload;
      const pp = state.find((post) => post.id == id);
      if (pp) {
        pp.Content = Content;
      }
    },
    deletePosts: (state, action) => {
      const { id } = action.payload;
      const pp = state.find((post) => post.id !== id);
      if (pp) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addPosts, updatePosts, deletePosts } = postSlice.actions;
export default postSlice.reducer;
