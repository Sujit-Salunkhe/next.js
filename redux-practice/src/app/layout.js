"use client"
import localFont from "next/font/local";
import { Provider } from "react-redux";
import { store } from "./store";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
        <p>{console.log("event")}</p>
        {children}
        </Provider>
      </body>
    </html>
  );
}
