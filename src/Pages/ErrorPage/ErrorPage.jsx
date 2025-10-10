import { Link } from "react-router";
import Footer from "../../Compoments/Footer/Footer";
import NavBar from "../../Compoments/NavBar/NavBar";
import errorImage from '../../assets/error-404.png';

const ErrorPage = () => {
    return (
        <div>
           <NavBar></NavBar>
           <section className="bg-[#F1F5E8] py-12">
             <div>
                <div>
                     <img src={errorImage} alt="Error 404" className="mx-auto" />
                </div>
                <h2 className="text-[#001931] font-bold mb-3 text-xl lg:text-5xl text-center mt-4">Oops, page not found!</h2>
                <p className="text-[#627382] text-xl mb-3 text-center">The page you are looking for is not available.</p>
                <div className="flex justify-center items-center">
                    <Link to='/'><button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] btn text-[#fff]">Go Back</button></Link>
                </div>
             </div>
           </section>
           <Footer></Footer>
        </div>
    );
};

export default ErrorPage;