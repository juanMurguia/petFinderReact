import React from "react";

import petFinderLogo from "../images/logo.png";

export function HeaderComp() {
  return (
    <header className="header w-100 bg-green-950 flex flex-row items-center px-4 py-4 gap-4">
      <img
        className="header__logo w-8"
        alt="pet-finder-logo"
        src={petFinderLogo}
      />
      <h1 className="text-white font-bold">Pet Finder</h1>
    </header>
  );
}
