import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const TrendingApp = ({ app }) => {
    const { title, image ,downloads,ratingAvg,id} = app;
    return (
       <Link to={`/appDetails/${id}`}>
          <div className="card bg-[#fff] shadow-sm ">
            <figure className="p-4">
                <img
                    src={image}
                    alt="Shoes" className="h-[166px] w-[316px]" />
            </figure>
            <div className="px-4">
                <h2 className="text-[#001931] font-medium text-2xl mt-3"> {title}</h2>
                 <div className="flex justify-between my-4">
                    <button className="btn btn-sm text-[#00D390] font-medium text-[16px]"> <FaDownload /> {new Intl.NumberFormat("en", { notation: "compact" }).format(downloads)}</button>
                   <button className="btn btn-sm text-[#FF8811] font-medium text-[16px]"> <FaDownload />{ratingAvg}</button>

                 </div>

            </div>
        </div>
        </Link>
    );
};

export default TrendingApp;