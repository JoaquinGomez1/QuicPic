import React from "react";

export function Navbar() {
  return (
    <nav className="w-screen border border-b-text bg-bg p-4 text-secondary">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex mx-2 items-center mr-16">
            <img></img> {/* TODO: Add logo later*/}
            <h2 className="text-2xl text-primary-dark font-bold">QuicPic</h2>
          </div>
          <ul className="flex items-center gap-4">
            <li className="text-primary font-semibold">Home</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
