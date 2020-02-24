// -------------------------- zadanie 1

const countChar = (text) => {
    console.log('liczba liter: ' + text.length );
}

countChar('jakisdlugitekst');

// -------------------------- zadanie 2 

const array = [1,2,3,4,5,6,7,8,9];

const sumArray = () => {
    let result = 0;
    for(let i = 0; i<array.length;i++){
        result += array[i];
    }
    return result
};

const sumArrayEach = () => {
    let result = 0;
    array.forEach(el => {
        result += el;
    });
    return result;
}

console.log(sumArrayEach());

// ---------------------------- zadanie 3

W konsoli wyświetli się string Marcin

// ---------------------------- zadanie 4

const text = 'Ala ma kota';

const changeText = () => {
    let txt = '';
    for(let i = 0; i<text.length;i++){
        if(i%2 !==0){
            txt += text.charAt([i]);
        }
        else {
            txt += text.charAt([i]).toUpperCase();
        }
        
    }
    return txt;
}

console.log(changeText());

// ---------------------------- zadanie 5

const resultMultiplication = (a,b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        return a*b;
    }
    else return false;
} 

console.log(resultMultiplication(2,2));
const regex = /\<br ?\/\>/g
const txt = 'ala <br /> <br/>';
const string = txt.replace(regex, '1');
console.log(string);

// ----------------------------- zad 6

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

const showName = (text,char) => {
    const array = text.split('|');
    const string = array.sort();
    const NewArray = string.join(char);
    console.log(NewArray); 
}

showName(str, '|');


// ----------------------------- zad 7

const tab = [];
let random =0;
for(let i = 0; i<10;i++){
    random = Math.floor(Math.random() * 10);
    tab.unshift(random);
}
console.log(tab);

const getMinFromTab = (tab) => {
    let min =tab[0];
    for(let i = 0; i<tab.length;i++){
        if( tab[i] < min){
            min = tab[i];
        };
    }
    return min
}

console.log(getMinFromTab(tab));


// ------------------------------- zad 8

function parzysta(number){
    if(number %2 ==0){
        console.log('parzysta');
    }
    else{
        console.log('nie parzysta');
    }
}

const tab = ["ania" , "Marcin" , "Bartek" , "Piotr"];

const changeArray = (array) => {
    const newArray =  [];
    array.forEach(element => {
        newArray.unshift(element.toUpperCase());
    });
    return newArray;
};

const changeChar = (array) => {
    const newArray = [];
    
    array.forEach(el => {
        var text = '';
        for(let i = 0; i<el.length;i++){
            if(i %2 == 0){
               text += el.charAt(i).toUpperCase();
            }
            else {
            text += el.charAt(i);
            }

           
        }
        newArray.push(text);

    });
    return newArray;
}



console.log(changeArray(tab));
console.log(changeChar(tab));


// ------------------------------- zad 9

(function displayText(name,age){
    console.log(`${name} ma ${age} lat.`)
})('Marek','10')

displayText('Kuba','31')

// ------------------------------- zad 10 
function showFile(fileName){
    let count = 1;

    function display(fileName){
        console.log(count + '. ' + fileName);
        count++;
    }
    display(fileName);
    
}

showFile('nazwa.jpg');
showFile('nazwa2.jpg');