export default { 
    has(name) {
        return localStorage.getItem(name) != null
    },
    get(name) {
        return localStorage.getItem(name);
    },
    set(name,value) {
        localStorage.setItem(name, value)
    },
    remove(name){  
        return localStorage.removeItem(name);
    }
} 