import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Define the tour cities and routes
const tourCities = [
  { city: "New York", date: "June 17th - 21st", path: "/tickets/ny" },
  { city: "Los Angeles", date: "June 22nd - 28th", path: "/tickets/la" },
  { city: "Detroit", date: "June 29th - 30th", path: "/tickets/de" },
  //{ city: "Paris", date: "June-12th", path: "/tickets/pa" },
  //{ city: "Berlin", date: "June-16th", path: "/tickets/be" },
  //{ city: "London", date: "June-21st", path: "/tickets/ld" },
  //{ city: "Barcelona", date: "June-28th", path: "/tickets/ba" },
];

export default function Tickets() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-700">
        Tour Dates – June
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tourCities.map(({ city, date, path }) => (
          <Link
            to={path}
            key={city}
            className="border p-6 rounded-lg shadow-md bg-white hover:bg-red-50 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center gap-y-4 text-red-700">
              <div className="text-4xl">
                <FaArrowRight />
              </div>

              <div className="text-xl uppercase font-semibold">{city}</div>

              <div className="text-sm">{date}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
