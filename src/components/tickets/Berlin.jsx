import React from "react";
import { Link } from "react-router";
const berlinImg = new URL("/tickets/berlin.jpg", import.meta.url).href;

export default function Berlin() {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <Link to="/ba">
        <button className="flex items-center gap-2">
          ona
          <img src={berlinImg} alt="Barcelona ticket" className="w-24 h-auto" />
        </button>
      </Link>
    </div>
  );
}
