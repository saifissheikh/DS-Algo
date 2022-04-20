function slowHash(key, arrayLength) {
    let total = 0;
    for(let i = 0; i < key.length; i++) {
        let value = key[i].charCodeAt(0) - 96;
        total = (total + value) % arrayLength;
    }
    return total;
}

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let weirdPrime = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total * weirdPrime + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let code = this._hash(key);
        if(!this.keyMap[code]) {
            this.keyMap[code] = [];
        }
        this.keyMap[code].push([key, value]);
    }

    get(key) {
        let code = this._hash(key);
        if(this.keyMap[code] !== undefined && this.keyMap[code].length > 0) {
            for(let item of this.keyMap[code])
                if(item[0] === key)
                    return item[1];
        }
        return undefined;
    }

    getKeys() {
        let keys = [];
        for(let index of this.keyMap) {
            if(index !== undefined && index.length > 0) {
                for(let item of index) {
                    if(!keys.includes(item[0]))
                        keys.push(item[0]);
                }
            }
        }
        return keys;
    }

    getValues() {
        let values = [];
        for(let index of this.keyMap) {
            if(index !== undefined && index.length > 0) {
                for(let item of index) {
                    if(!values.includes(item[1]))
                        values.push(item[1]);
                }
            }
        }
        return values;
    }
}
let hashT = new HashTable();
hashT.set('red', 10);
hashT.set('blue', 20);
hashT.set('yellow', 10);
hashT.set('maroon', 100);
hashT.set('black', 10);
hashT.set('white', 20);
console.log(hashT.getKeys());