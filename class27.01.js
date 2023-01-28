const sum = (a, b) => a + b;

module.exports = {
    sum,
    join,

};


const join = (arr, separator) => {
    let res = '';
    for(let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        res += elem + separator;
    }
    return res;
    
};

console.log(join([1, 2, 3]), '---');


const reverse = (array) => {
    const res = [];
    for(let i = 0; i < array.length; i++) {
        const lastEl = arr.length - 1 - i;
        res.push(array[lastEl]);
    }
    return res;
}
console.log(reverse([1, 2, 3]));

const arr = [
    {id: '1', name: 'Name 1', age: 15},
    {id: '2', name: 'Name 2', age: 18},
    {id: '3', name: 'Name 3', age: 20},
    {id: '4', name: 'Name 4', age: 25},
]

const find = (arr, item) => {
    for(i = 0; i < arr.length; i++) {
        if(arr.age[i]) {
            return(age[i]);
        } 
    }
}
