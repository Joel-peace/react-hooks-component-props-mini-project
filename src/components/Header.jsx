// src/components/Header.jsx
import React from "react";

function Header({ name }) {
  return (
    <header className="Header">
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
