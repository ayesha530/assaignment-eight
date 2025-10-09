import { useLoaderData } from "react-router";
import AllApps from "../../Compoments/AllApps/AllApps";


const Apps = () => {
    const data = useLoaderData()
    return (
        <div className="bg-[#D2D2D233]">
            <div className="w-11/12 mx-auto py-12">
           <h2 className="text-[#001931] lg:text-5xl font-bold text-center">Our All Applications</h2>
           <p className="text-[#627382] text-xl mt-2 text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
           <div className="flex justify-between mt-5">
             <h2>(132) Apps Found</h2>
             <div>
                <input type="search" className="input" placeholder="Search" />
             </div>
           </div>
           {/*  */}
           <div className="mt-5">
             <AllApps data={data}></AllApps>
           </div>
        </div>
        </div>
    );
};

export default Apps;