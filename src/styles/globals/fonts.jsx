import { Syne } from "next/font/google";
import { Inter } from "next/font/google";

export const syne = Syne({
  variable: "--syne-font",
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
  display: "swap",
});
