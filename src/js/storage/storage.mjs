// saves key and value in local storage
export function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// to load saved item from local storage
export function load(key) {
    try {
        value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null
    }
}

// removes item from local storage
export function remove(key) {
    localStorage.removeItem(key);
}

// clears local storages of all items
export function clear() {
    localStorage.clear();
}