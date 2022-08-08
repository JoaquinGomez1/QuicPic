import React, { useRef } from "react";

export function Navbar() {
  return (
    <nav className="w-screen border border-b-text bg-bg p-4 text-secondary">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex mx-2 items-center mr-16">
            <img></img>
            <h2 className="text-2xl text-primary-dark font-bold">Boltiny</h2>
          </div>
          <ul className="flex items-center gap-4">
            <li className="text-primary font-semibold">Task</li>
          </ul>
        </div>
        <SearchBar />
      </div>
    </nav>
  );
}

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <div
      tabIndex={0}
      className={`rounded-full border border-primary-light px-8 py-2 ${
        inputRef.current.id === document.activeElement?.id
          ? "outline-1 outline-primary-dark"
          : ""
      }`}
    >
      <input
        ref={inputRef}
        className="outline-none"
        type="text"
        placeholder="Search Task, project..."
      />
    </div>
  );
}
