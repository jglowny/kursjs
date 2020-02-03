let liczba = [];
const min = 10;
const max = 20;

for (let i = 0; i<3;i++){
    liczba[i] = Math.floor(Math.random() * (max-min+1)+ min);
}

console.log(liczba);

let maximum = 0;

for (let i = 0; liczba.length > i ;i++){
    (liczba[i]>maximum) ? maximum=liczba[i] : {};
}


console.log(maximum);

const maks = Math.max(...liczba);
console.log(maks);


const randomvalue = Math.floor(Math.random() *10);
console.log ('random ' + randomvalue);

const userValue = prompt('Podaj wartość');

(randomvalue == userValue) ? console.log('trafiles') : console.log('nie tym razem');




// console.log(liczba);