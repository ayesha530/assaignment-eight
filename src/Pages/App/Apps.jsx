import { useLoaderData } from "react-router";
import AllApps from "../../Compoments/AllApps/AllApps";
import { useState, useEffect } from "react";

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

//  loading effect
  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const term = search.trim().toLowerCase();
  const searchApps = term
    ? data.filter(
        app =>
          app.title.toLowerCase().includes(term) ||
          app.companyName.toLowerCase().includes(term)
      )
    : data;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

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
          <div className="flex items-center gap-2">
            <input
              value={search}
              type="search"
              className="input input-bordered w-full md:w-64"
              placeholder="Search by name or company"
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="btn btn-sm bg-gray-300 hover:bg-gray-400 text-black"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="mt-5">
          {searchApps.length > 0 ? (
            <AllApps data={searchApps} />
          ) : (
            <p className="text-center text-xl text-[#FF8811] mt-10 font-bold animate-pulse">
              No App Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
