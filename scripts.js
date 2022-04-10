// linking to HTML elements //
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const screen = document.querySelector("#screen");
const nine = document.querySelector("#nine");
const eight = document.querySelector("#eight");
const seven = document.querySelector("#seven");
const six = document.querySelector("#six");
const five = document.querySelector("#five");
const four = document.querySelector("#four");
const three = document.querySelector("#three");
const two = document.querySelector("#two");
const one = document.querySelector("#one");
const zero = document.querySelector("#zero");

let equation = [];

function input1() {
    equation.push(" + ");

}
function input2() {
    equation.push(" - ");

}
function input3() {
    equation.push(" * ");

}
function input4() {
    equation.push(" / ");

}
function input5() {
    equation.push();

}
function input6() {
    equation.push();

}
function input7() {
    equation.push(9);

}
function input8() {
    equation.push(8);

}
function input9() {
    equation.push(7);

}
function input10() {
    equation.push(6);

}
function input11() {
    equation.push(5);

}
function input12() {
    equation.push(4);

}
function input13() {
    equation.push(3);

}
function input14() {
    equation.push(2);

}
function input15() {
    equation.push(1);

}
function input16() {
    equation.push(0);

}


add.addEventListener("click", input1);
subtract.addEventListener("click", input2);
multiply.addEventListener("click", input3);
divide.addEventListener("click", input4);
equals.addEventListener("click", input5);
screen.addEventListener("click", input6);
nine.addEventListener("click", input7);
eight.addEventListener("click", input8);
seven.addEventListener("click", input9);
six.addEventListener("click", input10);
five.addEventListener("click", input11);
four.addEventListener("click", input12);
three.addEventListener("click", input13);
two.addEventListener("click", input14);
one.addEventListener("click", input15);
zero.addEventListener("click", input16);

function commence() {
    function extractingArray() {
        let finalEquation = equation.splice(0, 3);

        screen.textContent = (finalEquation);
    };


    function changingArray() {
        let a = finalEquation.pop();
        let b = finalEquation.pop();
        let c = finalEquation.pop();
        return (a, b, c)
    };

};








// function screenInput() {
//     screen.textContent = input
// }
// function solution() {
//     screen.textContent = answer
// }



// every input send that element into an array, once equal sign is pressed, extract elements from the array and then input it into a function to calculate, then have it appear on the screen //



// if all else fails, have the user pick two numbers, then pick the sign of what they want to od (ex. multiply). It will trigger the multiply function and input a * b //