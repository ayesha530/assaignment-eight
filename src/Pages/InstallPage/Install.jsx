import { useEffect, useState } from "react";
import icon from '../../assets/icon-downloads.png';
import star from '../../assets/icon-ratings.png';
import { useLoaderData } from "react-router";
import {  getUtilities } from "../../Utilities/Utilities";
import { MdPhotoSizeSelectSmall } from "react-icons/md";


const Install = () => {
  const removeFormData = (id)=>{
    const storeData = getUtilities();
    const newStoreData = storeData.filter(appId => appId !== Number(id));
    localStorage.setItem('install',JSON.stringify(newStoreData));


  }
  const [installList, setInstallList] = useState([]);
  const [sort, setSorts] = useState('');
  const data = useLoaderData();
  useEffect(() => {
    const storeInstallData = getUtilities()
    const convertedDataStoreData = storeInstallData.map(id => parseInt(id));
    const myInstallList = data.filter(app => convertedDataStoreData.includes(app.id));
    setInstallList(myInstallList)
  }, [data])
  const handleInstall = (id) =>{
    removeFormData(id);
    setInstallList(p => p.filter(app => app.id !== id));
  }
  const sortSizeItem = ()=>{
    if(sort === 'size-asc'){
           return [...installList].sort((a,b)=> a.size - b.size)
    }else if(sort ==='size-dsc'){
      return [...installList].sort((a,b)=> b.size - a.size)
    }else{
     return installList
    }
  }
  return (
    <section className="bg-[#0019311A] py-12">
      <div className="w-11/12 mx-auto">
          <div>
        <h2 className="text-[#001931] font-bold text-2xl lg:text-5xl mb-2 text-center">Your Installed Apps</h2>
        <p className="text-center text-[#627382] text-xl">Explore All Trending Apps on the Market developed by us</p>
      </div>
      {/*  */}
       <div className="mt-5 flex justify-between">
         <div><h2 className="text-[#001931] font-semibold text-[24px]">({installList.length}) App Used</h2></div>
        <div>
          <label className="form-control">
             <select className="select select-bordered" value={sort} onChange={e => setSorts(e.target.value)}>
              <option value="none">Sort By Size</option>
              <option value="size-asc">Low to High</option>
              <option value="size-dsc">High to Low</option>

             </select>

        </label>
        </div>

       </div>
       {/*  */}

      <div>
        {sortSizeItem().map(app => (
          <div className="card bg-base-100 shadow-sm mt-7 lg:card-side">
                <div className="flex justify-center items-center p-3">
                  <figure className="w-[80px] h-[80px] overflow-hidden rounded-lg">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover object-center" />
                </figure>
                </div>

                <div className="card-body ml-3">
                    <h2 className="text-[#001931] text-xl font-medium mb-3">{app.title}</h2>
                   

                    <div className="flex justify-baseline ml-4">
                        <div className="mr-4">
                            <img src={icon} alt="" className="w-[18px]"/>
                            <h4 className="text-[#001931] text-[16px] my-2">Downloads</h4>
                            <p className="text-[#001931] font-extrabold text-xl">
                                {new Intl.NumberFormat("en", { notation: "compact" }).format(app.downloads)}
                            </p>
                        </div>

                        <div className="ml-6">
                            <img src={star} alt="" className="w-[18px]"/>
                            <h4 className="text-[#001931] text-[16px] my-2">Average Ratings</h4>
                            <p className="text-[#001931] font-extrabold text-xl">{app.ratingAvg}</p>
                        </div>

                        <div className="ml-6">
                            <h5 className="text-3xl"><MdPhotoSizeSelectSmall /> </h5>
                            <h4 className="text-[#001931] text-[16px] my-2">Total size</h4>
                            <p className="text-[#001931] font-extrabold text-xl">
                                {app.size}
                            </p>
                        </div>
                    </div>

                   
                </div>
                <div className="flex justify-center items-center p-4">
                  <button onClick={()=> handleInstall(app.id)} className="bg-[#00D390] text-[#fff] btn">Uninstall</button>
                </div>
            </div>
           
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default Install;