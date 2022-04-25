
let op = false;

function setValue(val, type = "number") {


    if (type === "number") {

        document.querySelector(".inp").value = document.querySelector(".inp").value+val;
        op = false;
    }

    if (type === "operator" && op === false) {

        document.querySelector(".inp").value = document.querySelector(".inp").value+val;
        op = true;
    }


    // this allows one to add values continuously without it disappearing on the input screen
    // but it can also be document.querySelector(".inp").value+=val; 
    // this is called appending i.e a= a+2 is same as a+=2
    // set the function type = number so that when you put an operator eg ++++ in the input area it outputs null and void

}

function calculate(){

    let data = document.querySelector(".inp").value;
    let answer = eval(data);

    // eval is an inbuilt function in JS that performs any mathematical evaluation

    document.querySelector(".inp").value = answer;

    // this brings the answer to the input screen
}

// lets make the clear button 
function clearAll() {

    document.querySelector(".inp").value = "";
}

function backSpace() {

    let data = document.querySelector(".inp").value;
    let newData = data.substring(0, data.length - 1);
    document.querySelector(".inp").value =newData;

    op = false; //this enables one to add an operator then clear the operator you can add another operator after clearing the first operator
}

function squareRoot() {

    let data = document.querySelector(".inp").value;
    let answer = Math.sqrt(Number(data));
    document.querySelector(".inp").value = answer;
}

