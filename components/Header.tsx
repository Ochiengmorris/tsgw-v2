import React from "react";
import { BellDot, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  "Dashboard",
  "Drivers",
  "Vehicles",
  "Services",
  "Attendance",
  "Leaves",
  "Reports",
];

const Header = () => {
  return (
    <div className="h-26 bg-transparent px-4 flex items-center justify-between">
      <div className="text-2xl font-bold border-2 shadow-lg border-black/20 text-black/60 p-3 rounded-full">
        GARDA<span className="text-red-600">WORLD</span>
      </div>
      <div className="flex gap-1">
        <div className="flex gap-1 bg-slate-50/60 shadow-lg rounded-full p-1 items-center ">
          {links.map((link, index) => {
            const isActive = link === "Dashboard";
            return (
              <div
                key={link + index}
                className={cn(
                  "p-4 flex items-center gap-2 font-semibold text-black/70",
                  isActive && "bg-slate-950 text-white/90 rounded-full",
                )}
              >
                <p>{link}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          <div className="p-4 bg-slate-50/60 shadow-lg rounded-full flex items-center gap-2 font-semibold text-black/70">
            <Settings />
            <p>Settings</p>
          </div>
          <div className="p-4 bg-slate-50/60 shadow-lg rounded-full text-black/70">
            <BellDot />
          </div>
          <div className="p-4 bg-slate-50/60 shadow-lg rounded-full text-black/70">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
