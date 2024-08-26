const arr = [1, 200, 300];

Array.prototype.myReduce = function(callback, initValue) {
    const length = this.length;
    let total = initValue;
    for (let i = 0; i < length; i++) {
        total = callback(total, this[i]);
    }
    return total;
}
const mycb = (accumulator, currentValue) => {
    return accumulator + currentValue;
}
const result = arr.myReduce(mycb, 0);
console.log(result);