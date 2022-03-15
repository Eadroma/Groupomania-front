// Get data from our API for a specifical product
    const addItemLocalStorage = async (item) => {
        let data = localStorage.getItem('user');
        let JSONdata = JSON.parse(data);
        // error handling (existant item)
        if (JSONdata)
            return false;
        localStorage.setItem('user', JSON.stringify(item));
        return true 
    };
    const readLocalStorage = async () => {
        return await localStorage.getItem('user') == null ? false : JSON.parse(localStorage.getItem('user'));
    };

    module.exports.addItemLocalStorage = addItemLocalStorage;
    module.exports.readLocalStorage = readLocalStorage;