const arr = [1, 200, 300];

Array.prototype.myMap = function(callback) {
    const length = this.length;
    const newarr = [];
    for (let i = 0; i < length; i++) {
        if (callback(this[i])) {
            newarr.push(this[i])
        }
    }
    return newarr
}
const mycb = (num) => {
    return num >= 18;
}
const result = arr.myMap(mycb);
console.log(result);