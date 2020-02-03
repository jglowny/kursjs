const array = [];

const addValueInArray = () => {
    for(let i = 0; i<5;i++){
        let number = Math.floor((Math.random()*10) +1);
        array.push(number);
    };
};

addValueInArray();
console.log(array + ' ' + array.length + array.indexOf(4));