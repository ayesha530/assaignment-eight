import { useLoaderData, useParams } from "react-router";
import icon from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import like from '../../assets/icon-review.png';
import { ToastContainer, toast } from 'react-toastify';
import { addToStoreDb, getUtilities } from "../../Utilities/Utilities";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from 'recharts';
import { useEffect, useState } from "react";

const AppDetailsPage = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const app = data.find(app => app.id === parseInt(id));
    if (!app) return <div>App Not Found</div>;

    const [installed, setInstalled] = useState(false);

    useEffect(() => {
        const installedApps = getUtilities();
        if (installedApps.includes(app.id)) setInstalled(true);
    }, [app.id]);

    const handleToAddInstall = () => {
        addToStoreDb(app.id);
        setInstalled(true);
        toast.success("App installed!");
    };

    const { title, image, downloads, ratingAvg, companyName, reviews, description, ratings } = app;
    const appData = ratings.map(r => ({ name: r.name, count: r.count }));

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
                        <button
                            onClick={handleToAddInstall}
                            disabled={installed}
                            className={`btn ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"}`}
                        >
                            {installed ? "Installed" : "Install Now"}
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </div>

            <h3 className="text-[#001931] text-xl font-bold my-4">Rating</h3>
            {/*  */}

            <div className="flex justify-center bg-white rounded-xl shadow p-4">
                <BarChart
                    width={600}
                    height={250}
                    data={appData}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 50, bottom: 30 }}
                >
                    <CartesianGrid stroke="#eee" strokeDasharray="3 3" />

                    {/*  axis */}
                    <XAxis
                        type="number"
                        tickFormatter={(value) =>
                            new Intl.NumberFormat("en", { notation: "compact" }).format(value)
                        }
                        tick={{ fill: "#001931", fontWeight: 500 }}
                        axisLine={{ stroke: "#ccc" }}
                    />

                    <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fill: "#001931", fontWeight: 500 }}
                        width={70}
                    />

                    <Tooltip
                        formatter={(value) =>
                            new Intl.NumberFormat("en", { notation: "compact" }).format(value)
                        }
                        cursor={{ fill: "#f8f8f8" }}
                    />

                    <Bar dataKey="count" barSize={20} radius={[0, 10, 10, 0]} fill="#FF8811" />
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
