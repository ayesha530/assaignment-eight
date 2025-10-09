

const getUtilities = () =>{
    const storeAppStr = localStorage.getItem('readApp');
    if(storeAppStr){
        const storeAppData = JSON.parse(storeAppStr);
        return storeAppData;
    }else{
       return []
    }

}
const addToStoreDb = (id) =>{
    const storeData = getUtilities();
    if(storeData.includes(id)){
         alert('already exit')
    }else{
        storeData.push(id);
        const data = JSON.stringify(storeData);
        localStorage.setItem('readApp', data)
    }
}
export {addToStoreDb, getUtilities}