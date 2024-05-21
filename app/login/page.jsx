"use client";
import React from "react";
import LoginPage from "../components/IndexPages/LoginPage";
import loginAuth from "../auth/LoginAuth";

const page = () => {
  return <LoginPage />;
};

export default loginAuth(page);
