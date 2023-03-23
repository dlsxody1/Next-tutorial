import React from "react";
import axios from "axios";
import { authType } from "../../types/authType";

const baseAPI = axios.create({
  baseURL: "http://localhost:3001",
});

export const signUpApi = async (data: authType) => {
  const response = await baseAPI.post("/signup", data);
  return response;
};
