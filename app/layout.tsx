'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from 'classnames'
import { useState } from 'react';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="en">
      <body className={cn('red', inter.className)}>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;