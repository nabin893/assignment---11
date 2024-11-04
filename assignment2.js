




                                  // ASSIGNMENT  2
 
                                  


var weight = 40;
var hight = 1.50;
var bmi = weight / (hight * hight);



if (bmi < 18.5){
    console.log("you are underweight.your BMI is =",bmi,"kg");    
}

else if( bmi >= 18.5 &&  bmi <= 24.9){
   
    console.log(" you are normal. your BMI is =",bmi,"kg");
    
}

else if(bmi >= 25 && bmi <= 29.9) {
  
    console.log ("you are overweight. your BMI is =",bmi,"kg");
    
}

else{
    console.log(" you are obese. your BMI is =",  bmi,"kg");
    
}                                 