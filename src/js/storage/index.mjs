/**
 * This will save values to the localstorage.
 * @param {string} key Description of what is being saved,
 * @param {object, string} value Value of what is being saved,
 */

export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


/**
 * This will get the values from the localstage.
 * @param {string} key - Description of what is being fetched,
 */
export function load(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch (error){
        return  null
    }
}

/**
 * This will delete values from the localStorage.
 * @param {string} key This is a description of what is to be deleted from localStorage.
 */
export function remove(key) {
    localStorage.removeItem(key);
}