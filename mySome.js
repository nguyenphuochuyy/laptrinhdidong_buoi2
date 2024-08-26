const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.mySome = function(callback) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (callback(this[i])) {
            return 0;
        }
    }
}
const mycb = (num) => {
    if (num != 2 === 0)
        return true
    else
        return false
}
const result = arr.mySome(mycb);
console.log(result);