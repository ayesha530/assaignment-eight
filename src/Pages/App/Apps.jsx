import { useLoaderData } from "react-router";
import AllApps from "../../Compoments/AllApps/AllApps";
import { useState } from "react";



const Apps = () => {
  const data = useLoaderData();
  
  const [search, setSearch] = useState('');
  const term = search.trim().toLowerCase();
  const searchApps = term
    ? data.filter(app => app.title.toLowerCase().includes(term))
    : data;
  console.log(searchApps)
  return (
    <div className="bg-[#D2D2D233]">
      <div className="w-11/12 mx-auto py-12">
        <h2 className="text-[#001931] lg:text-5xl font-bold text-center">Our All Applications</h2>
        <p className="text-[#627382] text-xl mt-2 text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
        <div className="flex justify-between mt-5">
          <h2><span>({searchApps.length})</span> Apps Found</h2>
          <div>
            <input value={search} type="search" className="input" placeholder="Search" onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        {/*  */}
        <div className="mt-5">
          <AllApps data={searchApps}></AllApps>
        </div>
      </div>
    </div>
  );
};

export default Apps;