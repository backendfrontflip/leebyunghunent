import React from "react";
import { Link } from "react-router";
const barcaImg = new URL("/tickets/barca.jpg", import.meta.url).href;

export default function Barcelona() {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded shadow">
      <Link to="/ba">
        <button className="flex items-center gap-2">
          ona
          <img src={barcaImg} alt="Barcelona ticket" className="w-24 h-auto" />
        </button>
      </Link>
    </div>
  );
}
