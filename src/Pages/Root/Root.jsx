import { Outlet, useNavigation } from "react-router";
import NavBar from "../../Compoments/NavBar/NavBar";
import Footer from "../../Compoments/Footer/Footer";
import FullPageLoader from "../../Compoments/FullPageLoader/FullPageLoader";


const Root = () => {
     const navigation = useNavigation();

    return (
        <div className="">
            <NavBar> {navigation.state === "loading" && <FullPageLoader />}</NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;