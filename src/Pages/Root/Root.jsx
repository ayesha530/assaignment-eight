import NavBar from "../../Compoments/NavBar/NavBar";
import Footer from "../../Compoments/Footer/Footer";
import { Outlet } from "react-router";


const Root = () => {
    return (
        <div className="">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;