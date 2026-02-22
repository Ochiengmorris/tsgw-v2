import { Users } from "lucide";
import { Book, Truck, Users2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-4 h-full pt-4 flex flex-col">
      <h3 className="text-5xl">Hello, John Morris</h3>

      <div className="h-full pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex-1 p-3 flex">
            <div className="w-[20%] gap-2 flex flex-col">
              <p className="text-lg">Bulker Drivers</p>
              <div className="h-12 bg-red-700 rounded-full text-white flex items-center px-4">
                20%
              </div>
            </div>
            <div className="w-[70%] gap-2 flex flex-col">
              <p className="text-lg">Trailer Drivers</p>
              <div className="h-12 bg-black rounded-full text-white flex items-center px-4">
                70%
              </div>
            </div>

            <div className="w-[10%] gap-2 flex flex-col">
              <p className="text-lg">FH Drivers</p>
              <div className="h-12 bg-black/10 rounded-full text-black flex items-center px-4">
                10%
              </div>
            </div>
          </div>
          <div className="flex-1 p-3 flex items-center justify-end gap-10">
            <div>
              <div className="flex items-end">
                <div className="bg-black/10 p-1.5 rounded-full">
                  <Users2 className="size-4" />
                </div>
                <p className="text-7xl font-thin">65</p>
              </div>
              <p className="text-sm text-muted-foreground">All drivers</p>
            </div>
            <div>
              <div className="flex items-end">
                <div className="bg-black/10 p-1.5 rounded-full">
                  <Truck className="size-4" />
                </div>
                <p className="text-7xl font-thin">85</p>
              </div>
              <p className="text-sm text-muted-foreground">Vehicles</p>
            </div>
            <div>
              <div className="flex items-end">
                <div className="bg-black/10 p-1.5 rounded-full">
                  <Book className="size-4" />
                </div>
                <p className="text-7xl font-thin">11</p>
              </div>
              <p className="text-sm text-muted-foreground">Incident Reports</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-black/10 mt-2 flex-1 rounded-xl"></div>
      </div>
    </div>
  );
}
