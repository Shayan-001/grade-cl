let Perncentge = prompt("Enter Your Percentage");

Perncentge = Number (Perncentge);
// console.log(typeof Perncentge);
if (Perncentge >= 80 && Perncentge <= 100){
    alert("Your Grade is A1");
} 
else if (Perncentge >=70 && Perncentge <= 79){
    alert("Your Grade is A");
}
else if (Perncentge >=60 && Perncentge <= 69){
    alert("Your Grade is B");
}
else if (Perncentge >=50 && Perncentge <= 59){
    alert("Your Grade is C");
}
else if (Perncentge >=40 && Perncentge <= 49){
    alert("Your Grade is D");
}else{
    alert("Your Grade is Fail");

}