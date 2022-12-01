class Cache {
    cache = {}

    get(key){
        return this.cache[key];
    }

    set(key, data){
        this.cache[key] = data;
    }

    exists(key){
        return Object.hasOwn(this.cache, key);
    }
}

export default Cache;