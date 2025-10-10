import { useLoaderData } from "react-router";
import AllApps from "../../Compoments/AllApps/AllApps";
import { useState } from "react";

const Apps = () => {
  const data = useLoaderData(); 
  const [search, setSearch] = useState("");

  
  const searchTerm = search.trim().toLowerCase();

  const searchApps = searchTerm
    ? data.filter(
        (app) =>
          app.title.toLowerCase().includes(searchTerm) ||
          app.companyName.toLowerCase().includes(searchTerm)
      )
    : data;

  return (
    <div className="bg-[#D2D2D233] min-h-screen">
      <div className="w-11/12 mx-auto py-12">
        <h2 className="text-[#001931] lg:text-5xl font-bold text-center">
          Our All Applications
        </h2>
        <p className="text-[#627382] text-xl mt-2 text-center">
          Explore all apps on the market developed by us. We code for millions.
        </p>

      
        <div className="flex justify-between mt-5 flex-col md:flex-row gap-3">
          <h2>
            <span className="font-bold">{searchApps.length}</span> Apps Found
          </h2>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search apps..."
            className="input input-bordered w-full md:w-64"
          />
        </div>

      
        <div className="mt-5">
          {searchApps.length > 0 ? (
            <AllApps data={searchApps} />
          ) : (
            <p className="text-center text-xl text-[#FF8811] mt-10 font-bold">
              No App Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
