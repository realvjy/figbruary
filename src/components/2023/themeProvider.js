'use client'
import { ThemeProvider } from "styled-components"
import { lightTheme } from "@/styles/theme.config"
export default function StyledThemeProvider({children}){

  return (
    <ThemeProvider theme={lightTheme}>
      {children}
    </ThemeProvider>
  )
}