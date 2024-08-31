// const firstNumber=null;
// const operator= null;
// const secondNumber=null;




//to display the numbers in display once it is clicked
const display= document.querySelector('.display');
const buttons= document.querySelectorAll('button')
buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
        const value= btn.value;
        if (value ==='backspace') {
            display.textContent= display.textContent.slice(0,-1);
        }
        else if(value==='clear'){
        display.textContent=" ";

        }
        
        else{
            display.textContent+=value;
        }

    });
});
// function clear(){
// const clearbtn= document.querySelector('.clear');
// clearbtn.addEventListener('click',function(){
//     display.textContent="";
// })
// }

// const answer= display.textContent;
// if(answer.contains('+')){
//     add= answer.split('+');
//     console.log(add);
// }
const equal= document.querySelector('.equals');
equal.addEventListener('click',function(){
    const answer= display.textContent;
    console.log(typeof answer);
    if(answer.includes("-")){
       const sub= answer.split('-');
       const calc=subtract(Number(sub[0]),Number(sub[1]));
       console.log(calc); //typeof cal= NAN how???? whereas typeof Number(sub[0]) is number obviously
       display.textContent=calc;
    }
})
    

// function operate(operator,firstNumber,secondNumber){
//     switch(operator){
//         case '+':
//             add(firstNumber,secondNumber);
//             break;
//         case '-':
//             subtract(firstNumber,secondNumber);
//             break;
//         case'*':
//             multiply(firstNumber,secondNumber);
//             break;
//         case '/':
//             divide(firstNumber,secondNumber);
//             break;
//     }
// }
// let sub1=subtract(5,3)
console.log(subtract(5,3));
function addition(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}