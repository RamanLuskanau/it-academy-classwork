"use strict"

const arr = [
    'Minsk', 
    'Moscow', 
    'Brest', 
    'Mogilev', 
    'Homel'
];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const arr = [
    'Minsk', 
    'Moscow', 
    'Brest', 
    'Mogilev', 
    'Homel'
];
const res = [];
for(let i = 0; i < arr.length; i++) {
    res.push(arr[i] + ' never sleep');
}
console.log(res);

const data = [0, 1, false, 2, '', 3];
const compact = (arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            res.push(arr[i])
        }
        
    }
    return res;
}

const concat = (arr, ...rest) => {
    // return [...arr, ...rest];
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }
    for(let i = 0; i < rest.length; i++) {
        res.push(rest[i]);
    }
    return res
}

const join = (arr, sep) => {
    let result = '';
    for(let i = 0; i < arr.length; i++) {
        result += arr[i] + sep;
    }
    return result
}
console.log(join (['a', 'b', 'c'], '==='));
console.log(['a', 'b', 'c'].join('<===>'));

const reverse = (arr) => {
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        const lastEl = arr.length - 1 - i;
        res.push(arr[lastEl]);
    }
    return res
}
console.log(reverse([1, 2, 3, 4, 5]));

const reverse = (arr) => {
    const length = arr.length;
    for(let i = 0; i < arr.length / 2; i++) {
        const elem = arr[i];
        arr[i] = arr[length - i - 1];
        arr[arr.length - i - 1] = elem;
    }
}
const array = [1, 2, 3, 4, 5];
reverse(array);
console.log(array);

const array = [1, 2, 3, 4, 5];
console.log(array.reverse());

const truncate = (str, options) => {
    return str.slice(0, options.length) + options.separator; 
}
console.log(truncate('Вот, что я хотел бы сказать.', {
    length: 16,
    separator: '...'
})
);

const users = [
    { id: '1', name: 'name', age: 18 },
    { id: '2', name: 'name', age: 20 },
    { id: '3', name: 'name', age: 30 },
    { id: '4', name: 'name', age: 40 },
]
const result = users.filter( (item) => item.age > 18);
console.log(result);

const users = [
    { id: '1', name: 'name', age: 18 },
    { id: '2', name: 'name', age: 20 },
    { id: '3', name: 'name', age: 30 },
    { id: '4', name: 'name', age: 40 },
]
const user = users.find( (item) => {
    return item.id === '2'
})
console.log(user);

const find = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return arr[i];
        }
    }
}
const user = find(users, (item) => {
    return item.id === '2';
} );
console.log(user);

const array = [1, 2, 3, 4, 5];
array.push(100);
console.log(array);

const array = [1, 2, 3, 4, 5];
array.pop();
console.log(array);

const array = [1, 2, 3, 4, 5];
array.shift();
console.log(array);

const array = [1, 2, 3, 4, 5];
array.unshift(100);
console.log(array);

const words = ['Ivan', 'Hanna', 'Rick', 'John', 'Lisa', 'Henry'];
console.log(words.indexOf('John'));

const words = ['Ivan', 'Hanna', 'Rick', 'John', 'Lisa', 'Henry'];
console.log(words.includes('Raman'));

const arr = ['Raman', 'Hanna', 'Ivan'];
console.log(arr.length);

const arr = ['Raman', 'Hanna', 'Ivan'];
const res = arr.map( (el) => el + ' hello!');
console.log(res);

const ages = [6, 8, 11, 14, 15, 18, 22, 25, 37, 45, 60];
const res = ages.filter( (el) => el >= 18 && el < 50 );
console.log(res);

const ages = [6, 8, 11, 14, 15, 18, 22, 25, 37, 45, 60];
const res = ages.filter( (el) => el % 2 == 0 );
console.log(res);

const users = [
    { id: 1, salary: 1500 },
    { id: 2, salary: 300 },
    { id: 3, salary: 1000 },
    { id: 4, salary: 700 },
    { id: 5, salary: 550 },
]
const res = users.filter( (el) => el.salary >= 700);
console.log(res);

const words = ['Ivan', 'Hanna', 'Rick', 'John', 'Lisa', 'Henry'];
const res = words.slice(2, 4);
console.log(res);

const words = ['Ivan', 'Hanna', 'Rick', 'John', 'Lisa', 'Henry'];
const res = words.splice(2, 3);
console.log(res);

const fruit = ['апельсин', 'яблоко', 'банан', 'киви', ];
fruit.push('виноград');
console.log(fruit);

const fruit = ['апельсин', 'яблоко', 'банан', 'киви', ];
fruit.unshift('виноград');
console.log(fruit);

const fruit = ['апельсин', 'яблоко', 'банан', 'киви', ];
const res = fruit.pop();
console.log(res);

const fruit = ['апельсин', 'яблоко', 'банан', 'киви', ];
const res = fruit.shift();
console.log(res);

const fruit = ['апельсин', 'яблоко', 'банан' ];
const res = fruit.join(' -=- ');
console.log(res);

const words = ['Ivan', 'Hanna', 'Rick', 'John', 'Lisa', 'Henry'];
const res = words.reverse();
console.log(res);

const words = ['Ivan', 'Hanna', 'Rick', 'John', 'Lisa', 'Henry'];
const res = words.reduce( (el) => el + ' anonim');
console.log(res);

const names1 = ['Ivan', 'Hanna'];
const names2 = ['Rick', 'John'];
const res = [];
console.log(res.concat(names1, names2));

const obj = {
    id: 1,
    name: "Ivan", 
    salary: 1000,
}
for(let key in obj) {
    console.log(key);
    console.log(obj[key]);
}
