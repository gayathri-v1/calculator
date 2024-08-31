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
//to calculate after equal button is clicked.
const equal= document.querySelector('.equals');
equal.addEventListener('click',function(){
    const answer= display.textContent;
    console.log(typeof answer);
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
})
    

// console.log(subtract(5,3));
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