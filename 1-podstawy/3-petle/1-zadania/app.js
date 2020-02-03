// 1.
// let text = '';
// for(let i = 0; i<6;i++){
//     text += '*';
// }
// console.log(text);

// let text ='';
// for(let i = 0; i<10;i++){
    
//     text += i;
// }
// console.log(text);


3.
let part = '';
let text = 'jakis tekst bla bla bla';

for(let i = 0; i<3;i++){

    for(let j = 0; j<text.length+2;j++){

        if (i==0){
            if (j == 0){
                part += '╔';
            }
            else if (j == text.length+1){
                part += '╗';
            }
            else {
                part+= '═';
            }
        } 

        else if (i == 1){
            part += '║' + text + '║' + '\n';
            i =3;
        }
        
        else{
            part += '=';
            // console.log('tak');
        };
    };

    part += '\n';
}
    


console.log(part);