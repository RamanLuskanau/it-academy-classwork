// function sum(...test) {
//     console.log(test);
// }
// sum(5, 10, 15);


// function sum(a, b) {
//     alert(a + b);
// }
// sum(5, 10);


// let sum = (a, b) => a + b;

// function min(a, b) {
//     if(a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// min(5, 10);

// function ragne (Start, max, number) {
//     if(number > Start && number < max) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }

// const breakpoint = {
//     sm: 'sm',
//     jg: 'jg'
// }

// const sizis = {
//     [sm]: 576,
//     [lg]: 768
// }

// const user = {
//     name: 'JOhn',
//     surname: 'Smith',
// };

// user.name = 'Pete';

// delete user.name;
// console.log(user);

let salaries = {
    John: 100,
    Ann: 160, 
    Pete: 130
}

const sum = (obj) => {
    let result = o;
    for (let key in obj) {
        result += obj[key];
    }

    return result;
}
sum(salaries);

// function countSumSalary(salaries) {
//     let sum = 0;
//     for(let key in salaries) {
//         salaries[key];
//         for()

        
//     }
//     return(sum);
// }
// countSumSalary(salaries);
