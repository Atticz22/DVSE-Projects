import React, { useEffect } from "react";
import Header from "../components/header.jsx";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  return (
    <div className="bg-gray">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Happyness Not Found!</p>
      </div>
    </div>
  );
}
