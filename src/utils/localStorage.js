export const formatToMillions = n => n >= 1e6 ? (n / 1e6).toFixed(n % 1e6 ? 1 : 0) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1) + 'K' : n.toString();


export const getInstalledAppIds = () =>{
    return JSON.parse(localStorage.getItem('installedAppIds')) || [];
};
export const installApp = id => {
    const installedAppIds = getInstalledAppIds();
    
    if (installedAppIds.includes(id+'')){
        alert("Already Installed.")
    }else{
        installedAppIds.push(id);
        localStorage.setItem('installedAppIds', JSON.stringify(installedAppIds));
    }
};
export const uninstallApp = id => {
    const installedAppIds = getInstalledAppIds();
    if (!installedAppIds.includes(id+"")) {
        alert("Not Installed.")
    } else {  
        localStorage.setItem('installedAppIds', JSON.stringify(installedAppIds.filter(ID => ID !== id + "")));
    }
};
export const installed = id =>{
    const installedAppIds = getInstalledAppIds();
    return installedAppIds.includes(id + '')
}



