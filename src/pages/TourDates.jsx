import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function TourDates() {
  const allDates = [
    { date: "June 17th - 21st", city: "New York City", venue: "Hollywood Bowl", region: "America" },
    { date: "June 22nd - 28th", city: "Los Angeles", venue: "Madison Square Garden", region: "America" },
    { date: "June 29th - 30th", city: "Detroit, Michigan", venue: "The Eightfold Collective", region: "America" },
    //{ date: "June 12, 2025", city: "Paris, France", venue: "Accor Arena", region: "Europe" },
    //{ date: "June 16, 2025", city: "Berlin, Germany", venue: "Mercedes-Benz Arena", region: "Europe" },
    //{ date: "June 21, 2025", city: "London, UK", venue: "The O2", region: "Europe" },
    //{ date: "June 28, 2025", city: "Barcelona, Spain", venue: "Palau Sant Jordi", region: "Europe" },
  ];

  const [regionFilter, setRegionFilter] = useState("All");

  const filteredDates =
    regionFilter === "All"
      ? allDates
      : allDates.filter((item) => item.region === regionFilter);

  return (
    <section className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#06b6d4] text-white py-12 px-6 md:px-20 rounded-3xl shadow-2xl my-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide">🌍 2025 World Tour</h2>
        <p className="mt-2 text-lg md:text-xl">Live across America & Europe this June!</p>

        <div className="flex justify-center mt-6 gap-4 flex-wrap">
          {["All", "America", "Europe"].map((region) => (
            <button
              key={region}
              onClick={() => setRegionFilter(region)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                regionFilter === region
                  ? "bg-white text-blue-700"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {filteredDates.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 border border-white/20 backdrop-blur-lg p-4 md:p-6 rounded-xl flex items-center justify-between flex-wrap md:flex-nowrap shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-4 text-left">
              <CalendarDays className="w-6 h-6 text-white" />
              <div>
                <p className="text-lg font-semibold">{item.date}</p>
                <p className="text-sm opacity-80">{item.venue}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 md:mt-0">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-base font-medium">{item.city}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Link
        to="/tickets"
        className="inline-block mt-10 text-center bg-white text-blue-700 font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
      >
        Get Tickets
      </Link>
    </section>
  );
}
