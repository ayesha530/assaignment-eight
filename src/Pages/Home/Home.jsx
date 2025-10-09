import { useLoaderData } from "react-router";
import Banner from "../../Compoments/Banner/Banner";
import TrendingApps from "../../Compoments/TrendingApps/TrendingApps";
import State from "../../Compoments/State/State";


const Home = () => {
    const apps = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <State></State>
           <TrendingApps apps={apps}></TrendingApps>
        </div>
    );
};

export default Home;