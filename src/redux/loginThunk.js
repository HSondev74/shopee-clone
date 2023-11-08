import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const login = async (infoUser) => {
     const { identifier, password } = infoUser;
     let data = JSON.stringify({
          identifier: identifier,
          password: password,
     });
     let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://backoffice.nodemy.vn/api/auth/local",
          headers: {
               "Content-Type": "application/json",
               Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE4LCJpYXQiOjE2OTk0NTQyMjUsImV4cCI6MTcwMjA0NjIyNX0.FnSXu6bf9g28B7zgfMvFVVbOj4MxyKTtCUNk3NjzECs",
          },
          data: data,
     };
     const response = await axios(config).catch((err) => {
          console.log(err);
     });
     return response.data;
};

export const loginThunk = createAsyncThunk(
     "auth/loginThunk",
     async (infoUser, thunkAPI) => {
          const data = await login(infoUser);
          data.user = { ...data.user };
          return data;
     }
);

export default {
     [loginThunk.pending]: (state, action) => {
          state.loading = true;
     },
     [loginThunk.fulfilled]: (state, action) => {
          state.token = action.payload.jwt;
          state.user = action.payload.user;
          state.loading = false;
     },
     [loginThunk.rejected]: (state, action) => {
          state.loading = false;
     },
};
