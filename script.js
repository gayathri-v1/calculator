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
        operatorCount=0;
        }
        
        else{
            display.textContent+=value;
        }

    });
});
//to calculate after equal button is clicked.
const equal= document.querySelector('.equals');
equal.addEventListener('click',function(){
const answer= display.textContent;
operate(answer);
});

function operate(answer){
    
    if(answer.includes("-")){
       const nums= answer.split('-');
       const calc=subtract(Number(nums[0]),Number(nums[1]));
       display.textContent=calc.toFixed(2);
    }
    else if(answer.includes("x")){
        const nums=answer.split('x');
        const calc=multiply(Number(nums[0]),Number(nums[1]));
        display.textContent=calc.toFixed(2);
    }
    else if(answer.includes("/")){
        const nums=answer.split('/');
        const calc=divide(Number(nums[0]),Number(nums[1]));
        display.textContent=calc.toFixed(2);
    }
    else{
        const nums=answer.split('+');
        const calc=addition(Number(nums[0]),Number(nums[1]));
        display.textContent=calc.toFixed(2);
    }
}
// to calculate expression when operator is clicked without equals
let operatorCount=0;
const operators= document.querySelectorAll('.operator');
operators.forEach(function(operator){
    operator.addEventListener('click',function(){
        operatorCount++;
        opvalue=operator.value;
        const answer= display.textContent
        if(operatorCount>=2){
            operate(answer.slice(0,-1));
        }
        else{
            operate(answer);
        }
        
        display.textContent += opvalue;
});
});


// basic functions
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