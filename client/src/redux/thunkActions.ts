import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IGameSave, IGameStat, IUser } from "../types/types";

export const fetchStats = createAsyncThunk("stats/user", async () => {
  try {
    const response = await axios.get<IGameStat[]>(
      "http://localhost:3000/api/games"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchTopics = createAsyncThunk("topics/all", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/topics");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchUserLogin = createAsyncThunk(
  "user/login",
  async (loginPassword: IUser) => {
    try {
      const response = await axios.post<AxiosResponse<IUser>>(
        "http://localhost:3000/api/users/login",
        loginPassword,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchUserLogout = createAsyncThunk("user/logout", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/users/logout", {
      withCredentials: true,
    });
    return response.status;
  } catch (error) {
    console.log(error);
  }
});

export const fetchUserRegister = createAsyncThunk<IUser, IUser>(
  "user/register",
  async (user: IUser) => {
    try {
      const response = await axios.post<IUser>(
        "http://localhost:3000/api/users/registration",
        user,
        { withCredentials: true }
      );
      if (response.data && response.data.err) {
        throw new Error(response.data.err);
      }
      return response.data;
    } catch (error) {
      console.log('Ошибка при запросе регистрации:', error);
      throw error;
    }
  }
);

export const fetchUserScore = createAsyncThunk(
  "/user/score",
  async (saveGame: IGameSave) => {
    try {
      const response = await axios.put<AxiosResponse>(
        "http://localhost:3000/api/games",
        saveGame,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
