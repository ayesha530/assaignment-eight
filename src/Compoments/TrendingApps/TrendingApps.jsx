import { Suspense } from "react";
import TrendingApp from "../TrendingApp/TrendingApp";
import { Link } from "react-router";


const TrendingApps = ({ apps }) => {
    return (
        <div className="py-12 bg-[#D2D2D233]">
            <h2 className="text-center text-[#001931] text-5xl font-bold mb-2">Trending Apps</h2>
            <p className="text-[#627382] text-[16px] text-center mt-3 mb-4">Explore All Trending Apps on the Market developed by us</p>
            <div className="w-11/12 mx-auto">
                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {apps.map(app => 
                (
                    <TrendingApp key={app.id} app={app} />
                ))}
                </div>
            </Suspense>
            </div>
            <div className="flex justify-center items-center my-7">
                <Link to="/apps" className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-[#fff]">
                   Show All
                </Link>

            </div>
        </div> 
    );
};

export default TrendingApps;