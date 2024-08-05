"use client"
import "@/app/ui/global.scss";

import "../../node_modules/bootstrap/scss/bootstrap.scss";
import HeaderDesktop from "./ui/components/header/HeaderDesktop";
import { useState, useEffect } from "react";
import HeaderMobile from "./ui/components/header/HeaderMobile";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (windowWidth === 0) {
        return null; 
    }

  return (
    <html lang="en">
      <body>
        { windowWidth === 0 ? null : null}
        { windowWidth > 768 ? <HeaderDesktop></HeaderDesktop> : <HeaderMobile></HeaderMobile>}
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
