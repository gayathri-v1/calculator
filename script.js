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
       const calc=subtract(parseInt(nums[0]),parseInt(nums[1]));
       display.textContent=calc;
    }
    else if(answer.includes("x")){
        const nums=answer.split('x');
        const calc=multiply(parseInt(nums[0]),parseInt(nums[1]));
        display.textContent=calc;
    }
    else if(answer.includes("/")){
        const nums=answer.split('/');
        const calc=divide(parseInt(nums[0]),parseInt(nums[1]));
        display.textContent=calc;
    }
    else{
        const nums=answer.split('+');
        const calc=addition(parseInt(nums[0]),parseInt(nums[1]));
        display.textContent=calc;
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