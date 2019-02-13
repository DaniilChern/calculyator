function pow2(){
   let num1 = document.getElementById("inp1").value;
   numNumber1 = +num1;
   let num2 = document.getElementById("inp2").value;
   numNumber2 = +num2;
   numNumber3 = numNumber1+numNumber2;
   let ind1=[num1 ," + ", num2," = ",numNumber3];
   alert(ind1.join(" "));
}
function pow3(){
   let num1 = document.getElementById("inp1").value;
   numNumber1 = +num1;
   let num2 = document.getElementById("inp2").value;
   numNumber2 = +num2;
   numNumber3 = numNumber1-numNumber2;
   let ind1=[num1 ," - ", num2," = ",numNumber3];
   alert(ind1.join(" "));
}
function pow4(){
   let num1 = document.getElementById("inp1").value;
   numNumber1 = +num1;
   let num2 = document.getElementById("inp2").value;
   numNumber2 = +num2;
   numNumber3 = numNumber1*numNumber2;
   let ind1=[num1 ," * ", num2," = ",numNumber3];
   alert(ind1.join(" "));
}
function pow5(){
   let num1 = document.getElementById("inp1").value;
   numNumber1 = +num1;
   let num2 = document.getElementById("inp2").value;
   numNumber2 = +num2;
   numNumber3 = numNumber1/numNumber2;
   let ind1=[num1 ," / ", num2," = ",numNumber3];
   alert(ind1.join(" "));
}
