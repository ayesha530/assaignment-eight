

const getUtilities = () =>{
    const storeAppStr = localStorage.getItem('install');
    if(storeAppStr){
        const storeAppData = JSON.parse(storeAppStr);
       return storeAppData.map(Number);
    }else{
       return []
    }

}
const addToStoreDb = (id) =>{
    const storeData = getUtilities();
    if(storeData.includes(Number(id))){
         alert('already exit')
    }else{
        storeData.push(Number(id));
        const data = JSON.stringify(storeData);
        localStorage.setItem('install', data)
    }
}
export {addToStoreDb, getUtilities}