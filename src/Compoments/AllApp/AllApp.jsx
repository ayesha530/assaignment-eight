import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AllApp = ({ allApp, loading }) => {
  if (loading) {
    // loader card
    return (
      <div className="card bg-white shadow-sm animate-pulse p-4">
        <div className="h-40 w-full bg-gray-300 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="flex justify-between">
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
          <div className="h-6 w-16 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  const { title, image, downloads, ratingAvg, id } = allApp;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card bg-white shadow-sm">
        <figure className="p-4">
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-cover rounded-lg"
          />
        </figure>
        <div className="px-4">
          <h2 className="text-[#001931] font-medium text-2xl mt-3">{title}</h2>
          <div className="flex justify-between my-4">
            <button className="btn btn-sm text-[#00D390] font-medium text-[16px]">
              <FaDownload />
              {new Intl.NumberFormat("en", { notation: "compact" }).format(
                downloads
              )}
            </button>
            <button className="btn btn-sm text-[#FF8811] font-medium text-[16px]">
              <FaStar />
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllApp;
