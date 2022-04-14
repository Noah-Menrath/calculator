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
const clear = document.querySelector("#clear");

let equation = [];

let operationEquation = [];

let firstNumbers = [];
let secondNumbers = [];


// pushes input to equation array if button is pressed //
function input1() {
    operationEquation.push("add");
    screen.textContent="+";
    firstNumbers = equation.join('')
    console.log(`COMEONPLEASE: ${firstNumbers}`)
    equation.length = 0;


}
function input2() {
    operationEquation.push("subtract");
    screen.textContent="-";

}
function input3() {
    operationEquation.push("multiply");
    screen.textContent="*";

}
function input4() {
    operationEquation.push("divide");
    screen.textContent="/";

}
function input7() {
    equation.push(9);
    screen.textContent="9";

}
function input8() {
    equation.push(8);
    screen.textContent="8";

}
function input9() {
    equation.push(7);
    screen.textContent="7";

}
function input10() {
    equation.push(6);
    screen.textContent="6";

}
function input11() {
    equation.push(5);
    screen.textContent="5";

}
function input12() {
    equation.push(4);
    screen.textContent="4";

}
function input13() {
    equation.push(3);
    screen.textContent="3";

}
function input14() {
    equation.push(2);
    screen.textContent="2";

}
function input15() {
    equation.push(1);
    screen.textContent="1";

}
function input16() {
    equation.push(0);
    screen.textContent="0";

}

equals.addEventListener("click", input17);


add.addEventListener("click", input1);
subtract.addEventListener("click", input2);
multiply.addEventListener("click", input3);
divide.addEventListener("click", input4);
equals.addEventListener("click", commence);
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



clear.addEventListener("click", clearData1);
function clearData1() {
    equation.length = 0;
}

function input17() {
    secondNumbers = equation.join('');
    console.log(`secondNumbers: ${secondNumbers}`)
}


// trying to calculate two variables while also inputting math sign by using a define variable //
function commence() {
    


    let alpha = finalEquation.shift();
    let charlie = finalEquation.pop();
    let beta = finalEquation.pop();
    console.log(alpha, beta, charlie);
    // console.log(beta);
    clear.addEventListener("click", clearData2);
    function clearData2() {
        finalEquation.length = 0;
    }
    clear.addEventListener("click", clearData3);
    function clearData3() {
        screen.textContent = ""
    }
   
    
    function doMathPlease() {
        if (beta == "add") {
            let answer = (alpha + charlie)
            screen.textContent= answer;
            console.log(`= ${answer}`);
        } 
        else if (beta == "subtract") {
                let answer = (alpha - charlie)
                screen.textContent= answer;
                console.log(answer);
            }
        else if (beta == "multiply") {
                let answer = (alpha * charlie)
                screen.textContent= answer.toFixed(1);
                console.log(answer);
            }
        else if (beta == "divide") {
                let answer = (alpha / charlie)
                screen.textContent= answer.toFixed(3);
                console.log(answer);
        } else {
            console.log("UHHHHHHHHHHHHHHHHHHHOHHHHHHHHHHHHHHH");
        }
    };

    equals.addEventListener("click", doMathPlease);
            
            




        // last resort: //
        // if sign == + do this //
        //if sign == - do this //

};




// Make it so double digit values can be used and also round only if number has decimal and not all the time displaying ex. 5.00000 //



// when double digit numbers (ex. 2, 7) --> when pressing operation sign (ex. +) --> output array into new array --> concat the first two entires (2 and 7) to form a double digit number --> turn it into a number using praseInt perhaps?









// every input send that element into an array, once equal sign is pressed, extract elements from the array and then input it into a function to calculate, then have it appear on the screen //



// if all else fails, have the user pick two numbers, then pick the sign of what they want to od (ex. multiply). It will trigger the multiply function and input a * b //





// if * or / or + ir - pressed after = then have first number be the previous answer (in other words continue calculating without having to type in the answer that someone just got. ex. 3x2=6x3=18 instead of 3x2=6, 6x3=18) //