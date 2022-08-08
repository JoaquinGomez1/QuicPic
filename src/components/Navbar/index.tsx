import React from "react";

export default function Navbar() {
  return (
    <nav className="w-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="w-full flex justify-between">
          <h2 className="text-2xl">Boltiny</h2>
          <ul className="flex items-center">
            <li>Login</li>
            <li>Login</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
