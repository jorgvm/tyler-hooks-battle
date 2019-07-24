import React from "react";

export const ThemeContext = React.createContext();

const { Consumer, Provider } = ThemeContext;
export const ThemeConsumer = Consumer;
export const ThemeProvider = Provider;
