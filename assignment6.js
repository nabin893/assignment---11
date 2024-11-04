
                            //  assignment     -6




var money = 800;
var age = 15;
// var age = "Students";


if ( age > 0 && age <= 10){
    var discount1 = money *100/100; 
    var discountChild = money - discount1;
    console.log("discount for childrens is 100% =",discountChild,"tk");    
}

else if(age > 60 && age <= 100 ) {
    var discount3 = money *15/100;
    var  discountCitizen = money - discount3;
    console.log ("discount for Citizen is 15% =",discountCitizen,"tk");    
}
else if(age > 22 && age < 60) {
    console.log (money,"tk");  
}

else{
    var discount2 = money *50/100;
    var  discountSudents = money - discount2;
    console.log("discount for Students is 50% =", discountSudents,"tk"); 
    
}