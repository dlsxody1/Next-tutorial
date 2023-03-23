import React from "react";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { SessionProvider } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [],
});
