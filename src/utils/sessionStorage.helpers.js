export default { 
    has(name) {
        return sessionStorage.getItem(name) != null
    },
    get(name) {
        return sessionStorage.getItem(name);
    },
    set(name,value) {
        sessionStorage.setItem(name, value)
    },
    remove(name){  
        return sessionStorage.removeItem(name);
    }

} 