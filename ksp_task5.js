//OPERATORS


//Arithematic Operator
console.log(" ");
console.log("Arithematic Operators");
let number1=5;
let number2=2;
let number3=6;
let number4=3;
console.log("The sum is "+(number1+number2));
console.log("The difference is "+(number1-number2));
console.log("The product is "+(number1*number2));
console.log("The quotient is "+(number1/number2));
console.log("The remainder is "+(number1%number2));
console.log("The exponentiation result is "+(number1**number2));
console.log("The result of increment is "+(++number2));
console.log("The result of decrement is "+(--number1));
number3++;
console.log("The current value of number3 is "+number3);
number4--;
console.log("The current value of number4 is "+number4);



//Assignment Operator
console.log(" ");
console.log("Assignment Operators");
let number5=9;
let number6=8;
let number7=10;
let number8=18;
let number9=12;
let number10=4;
number5+=2;
number6-=3;
number7*=2;
number8/=9;
number9%=5;
number10**=4
console.log("The current value of number5 is "+number5);
console.log("The current value of number6 is "+number6);
console.log("The current value of number7 is "+number7);
console.log("The current value of number8 is "+number8);
console.log("The current value of number9 is "+number9);
console.log("The current value of number10 is "+number10);



//Comparison Operator
console.log(" ");
console.log("Comparison Operators");
console.log(number1==number2);
console.log(number1===number2);
console.log(number1!=number2);
console.log(number1>number2);
console.log(number1<number2);
console.log(number1>=number2);
console.log(number1<=number2);



//Logical Operator
console.log(" ");
console.log("Logical Operators");
console.log(number5<10 && number6>10);
console.log(number5<10 || number6>10);
console.log(!(number5<10 && number6>10));


//FUNCTIONS
console.log(" ");
console.log("JAva Script Functions");
function add(number11, number12){
  console.log("The sum is "+(number11+number12));
}
function sub(number11, number12){
  console.log("The sum is "+(number11-number12));
}
function mul(number11, number12){
  console.log("The sum is "+(number11*number12));
}
function div(number11, number12){
  console.log("The sum is "+(number11/number12));
}
add(2,3);
sub(5,4);
mul(3,6);
div(4,2);



//IF, ELSE-IF, ELSE STATEMENTS
console.log(" ");
console.log("IF, ELSE-IF, ELSE STATEMENTS");
if(number5==number6){
  console.log("HELLO");
}
else if(number5<number6){
  console.log("HI");
}
else if(number5>=number6){
  console.log("THANK YOU...");
}
else{
  console.log("SEE YOU LATER");
}



//FOR LOOP
console.log(" ");
console.log("FOR LOOP");
for(i=1;i<=10;i++){
  console.log("I am Number "+i);
}



//WHILE LOOP
console.log(" ");
console.log("While Loop");
let j=0;
while(j<10){
  console.log("Hello World....!!");
  j++;
}



//STRINGS..
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log("....STRINGS....");
let fname="Priya";
let lname="Jasti";
let string1="   Hi   ";
let string2="   Hello   ";
console.log(fname+lname);
console.log(fname+" "+lname);
console.log(fname[2]);
console.log(lname.toUpperCase());
console.log(lname.toLowerCase());
console.log(lname.length);
console.log(lname.charAt(3));
console.log(fname.at(-2));
console.log(fname.slice(1,4));
console.log(fname.substring(2,4));
console.log(fname.concat(" ", lname));
console.log(lname.split(","));
console.log(string1.trim());
console.log(string2.trimEnd());
console.log(string2.trimStart());



