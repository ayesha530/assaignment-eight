import banner from '../../assets/hero.png'
import google from '../../assets/google-play.png'
import apps from '../../assets/app-store.png'
const Banner = () => {
    return (
        <section className="bg-[#D2D2D233] pt-12">
           <div className=" lg:w-[597px] m-auto">
              <div className="">
                <h2 className="text-center text-[#001931] text-2xl lg:text-[72px] font-medium">We Build</h2>
                <h3 className="text-center text-[#001931] text-2xl lg:text-[72px] font-medium mb-3"><span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive </span>Apps</h3>
                <p className="text-center text-[#627382] text-[16px]">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex justify-center items-center mt-5">
                    <button className="btn text-[#001931] font-semibold text-xl"> <img src={google} alt="" />Google Play</button>
                    <button className="btn text-[#001931] font-semibold text-xl ml-2"> <img src={apps} alt="" />App Store</button>


                </div>
            </div>
            {/*  */}
            <div className='mt-6'>
                <img src={banner} alt="" />
            </div>
           </div>
           
        </section>
    );
};

export default Banner;