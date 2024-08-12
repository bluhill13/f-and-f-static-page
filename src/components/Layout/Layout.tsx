import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen">
      <Header />
      {location.pathname === "/" ? (
        <div className="pt-0"></div>
      ) : (
        <div className="pt-48"></div>
      )}
      <div
        className={`prose prose-sm md:prose-md lg:prose-lg text-blue-500 bg-white lg:mx-auto`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
