import { Suspense } from "react";
import AllApp from "../AllApp/AllApp";
const AllApps = ({data}) => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {data.map(allApp => 
                (
                    <AllApp key={allApp.id} allApp={allApp} />
                ))}
                </div>
            </Suspense>
        </div>
    );
};

export default AllApps;