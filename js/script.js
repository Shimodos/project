"use strict";

// if (4 == 9) {
//     console.log('OK!');
// }else{
//     console.log('error!');     
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// }else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK!');     
// }

// (num === 50) ? console.log('OK!') : console.log('Error');
// +'4';




// const num = 50;

// switch (num) {
//     case 49:
//         console.log('non');
        
//         break;
//     case 100:
//         console.log('non');
        
//         break;
//     case 51:
//         console.log('yes');
        
//         break;

//     default:
//         console.log('non this');
//         break;
// }


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries){
//     console.log('я сыт');

// }

//Console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets =2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets){
//     console.log('Все сыты');
// } else {
//     console.log('Go enothe restourant');

// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// let johnReport, alexReport, samReport, marinaReport = 'done';

// console.log(hamburger === 3 && cola === 2);


// console.log(!0);



// let num =50;

// while (num < 55) {
//     console.log(num);
//     num++;
    
// }

// do{
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         //break;
//         continue;
//     }
//     console.log(i);
    
// }



for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);

    }
}




let result = '';
const length = 7;

for (let i = 1; i < length; i++){

    for (let j = 0; j < i; j++){
        result += "*";
    }

    result += '\n';
}


console.log(result);



First: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) break First;
            console.log(`Third level: ${k}`);
        }
    }
}