var btnT = document.querySelector("#btn");
var txtInput1 = document.querySelector("#txt-input1");
var txtInput2 = document.querySelector("#txt-input2");
var txtInput3 = document.querySelector("#txt-input3");
var output = document.querySelector("#output");

// console.log(btnT);
// console.log(txtInput1 );
// console.log(txtInput2);
// console.log(txtInput3);

function clickTriangle(){
    console.log("hi");
    console.log(txtInput1.value);
    console.log(txtInput2.value);
    console.log(txtInput3.value);
    var sum = parseInt(txtInput1.value) + parseInt(txtInput2.value) + parseInt(txtInput3.value);
    console.log(sum);
    if(sum===180){
        output.innerText = "It is a Triangle"
    }else{
        output.innerText = "It is not a Triangle"    
    }
    
}
btnT.addEventListener("click" , clickTriangle)