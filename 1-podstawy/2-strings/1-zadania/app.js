

// const getRandomNumber = () => {
//     let number = Math.floor(Math.random() *10);
//     return number;
// }

// const text = 'abcdefghijklmnoprstw';

// // let randomNumber = ;
// // // console.log(randomNumber);

// let id ='';

// for(let i = 0; i<20;i++){
//     id += getRandomNumber();
// };

// console.log('calosc ' + id);


function doItWhenReady() {
    alert('Hello from callback!'); 
}
function doItWhenReady2() {
    alert('Hello from callback!2'); 
}

function process(callback) {    
    if (callback) {
         callback();   
    }  
}

process(doItWhenReady);