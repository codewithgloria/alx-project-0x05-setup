import React from 'react';
import { ReactComponentProps } from "@/interfaces";
import Footer from "./Footer"
import Header from "./Header"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;
