"use client"
import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import { SessionProvider } from "next-auth/react";

interface IProps {
  children: React.ReactNode; 
}

export default function RootLayout( {children} : IProps ) 
{
  return (
    <html lang="en">
      <body>
      <SessionProvider>
      <Navbar />
      {children}
      <Footer />
      </SessionProvider>
      </body>
    </html>
  );
}
