export const formatToMillions = n => n >= 1e6 ? (n / 1e6).toFixed(n % 1e6 ? 1 : 0) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(1) + 'K' : n.toString();


export const getInstalledAppIds = () =>{
    return localStorage.getItem('installedAppIds') || [];
};
export const installApp = id => {
    const installedAppIds = getInstalledAppIds();
    if (installedAppIds.includes(id)){
        alert("Already Installed.")
    }else{
        installedAppIds.push(id);
        localStorage.setItem('installedApps', JSON.stringify(installedAppIds));
    }
};
export const uninstallApp = id => {
    const installedAppIds = JSON.parse(getInstalledAppIds());
    console.log(id, installedAppIds);
    if (!installedAppIds.includes(id+'')) {
        alert("Not Installed.")
    } else {
        installedAppIds.filter(ID => ID !== id+"");
        console.log('first', 2)
        localStorage.setItem('installedApps', JSON.stringify(installedAppIds));
    }
};



