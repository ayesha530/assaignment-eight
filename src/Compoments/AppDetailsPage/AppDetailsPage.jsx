import { useLoaderData, useParams } from "react-router";
import icon from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import like from '../../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';


const AppDetailsPage = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const app = data.find(app => app.id === parseInt(id));

    if (!app) return <div>App Not Found</div>;

    const appData = app.ratings.map(r => ({
    name: r.name,   
    count: r.count  
  }));

    const { title, image, downloads, ratingAvg, companyName, reviews ,description} = app;

    return (
        <div className="w-11/12 mx-auto">
            <div className="card bg-base-100 shadow-sm mt-7 lg:card-side">
                <figure className="w-[300px] h-[300px] overflow-hidden rounded-lg">
                    <img src={image} alt={title} className="w-full h-full object-cover object-center" />
                </figure>

                <div className="card-body ml-3">
                    <h2 className="text-[#001931] text-3xl font-bold mb-3">{title}</h2>
                    <p className="text-xl text-[#627382]">
                        Company Name:{" "}
                        <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                            {companyName}
                        </span>
                    </p>
                    <div className="divider"></div>

                    <div className="flex justify-baseline ml-4">
                        <div className="mr-4">
                            <img src={icon} alt="" />
                            <h4 className="text-[#001931] text-[16px] my-2">Downloads</h4>
                            <p className="text-[#001931] font-extrabold text-4xl">
                                {new Intl.NumberFormat("en", { notation: "compact" }).format(downloads)}
                            </p>
                        </div>

                        <div className="ml-6">
                            <img src={star} alt="" />
                            <h4 className="text-[#001931] text-[16px] my-2">Average Ratings</h4>
                            <p className="text-[#001931] font-extrabold text-4xl">{ratingAvg}</p>
                        </div>

                        <div className="ml-6">
                            <img src={like} alt="" />
                            <h4 className="text-[#001931] text-[16px] my-2">Total Reviews</h4>
                            <p className="text-[#001931] font-extrabold text-4xl">
                                {new Intl.NumberFormat("en", { notation: "compact" }).format(reviews)}
                            </p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <button className="btn btn-lg bg-gradient-to-br from-[#54CF68] to-[#00827A] text-white">
                            Install Now (291 MB)
                        </button>
                    </div>
                </div>
            </div>

            <h3 className="text-[#001931] text-xl font-bold my-4">Rating</h3>
            {/*  */}
            <div className="flex justify-center">
                <BarChart width={600} height={300} data={appData}>
                     <YAxis 
            tickFormatter={(value) => `${value / 1000}k`} 
            domain={[0, 'auto']} 
          />
          <XAxis dataKey="name" stroke="#FF8811" />
         
          <Tooltip formatter={(value) => `${value / 1000}k`} wrapperStyle={{ backgroundColor: "#ccc" }} />
          <Legend />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="count" fill="#FF8811" barSize={30} />
        </BarChart>
            </div>
            {/*  */}
            <div className="mb-5">
                 <h3 className="text-[#001931] text-2xl mb-2 font-semibold">Description:</h3>
                <p className="text-[#627382] text-[16px]">{description}</p>
            </div>
        </div>
    );
};

export default AppDetailsPage;
