// // let js='amazing';
// // // if(js==='amazing') alert('javaScript is fun');

// // x=12+3+90-20;
// // console.log(x);

// // console.log('Ramesh')
// // let firstname="Ramesh"

// // console.log(firstname)
// // let lastName='Rawat';

// // let fullName = 'srish rawat'
// // let PI=3.1415
// // console.log(fullName)

// // let myFirstJob='Programmer'
// // let mySecondJob='Teacher'

// // console.log(myFirstJob);
// // console.log(mySecondJob);
// //2nd day of training
// // true;
// // console.log(true)
// let javaScriptIsFun=true;
// // console.log(javaScriptIsFun);
// // console.log(typeof true);
// // console.log(typeof javaScriptIsFun);
// // console.log(typeof 33);

// javaScriptIsFun='yes';
// console.log(javaScriptIsFun);
// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 33);

// let year;
// console.log(year);
// console.log(typeof year);
// year=1990;
// console.log(typeof year);


// console.log(typeof null);

// let age=30;
// console.log(age);
// age = 32;
// console.log(age);
// console.log(typeof age);


// myName='Ramesh Rawat';
// console.log(myName);

// const now=2037;
// const ageJonas=now-1991;
// const ageSarah=now-2018;
// console.log(now-1991 > now-2018)


//cooding challenge 1

// const markMass=78;

// const markHeight=1.69;

// const johnMass=92;

// const johnHeight=1.95;

// const markBMI=markMass/(markHeight**2);
// const johnBMI=johnMass/(johnHeight**2);
// console.log(markBMI);
// console.log(johnBMI);

// let markHigherBMI=(markBMI > johnBMI)
// console.log(markHigherBMI);

// const firstName ='John';
// const job ='teacher';
// const birthYear=1992;
// const year =2038;
// const john ="I'm " + firstName + ', a ' +(year - birthYear) + ' years old ' + job + '!';
// console.log(john);

// const johnNew=`I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
// console.log(johnNew);

// const lastName='Rawat';
// const hobby='Coder'
// const age=24;
// const detail=`I'm ${lastName} a ${age} years old ${hobby}.`
// console.log(detail);
// // multi line string
// console.log(`string
// multiple
// lines`)
// console.log('string\n\
// multiple \n\
// lines');


// if else statements

// const age=14;

// if (age>=18) {
//   console.log(`he is ${age} years old and can start driving`);
// }else{
//   const yearsLeft=18-age;
//   console.log(`he is ${age} years old and can't start driving he has ${yearsLeft} years left`);
// }

// const birthYear =2012;
// let century;
// if (birthYear<=2000){
//   century=20;
//   console.log('he was born in the 20th century');
// }else{
//   century=21;
//   console.log('he was born in the 21st century');
// }
// console.log(`he is ${century} years old and can start driving`);

// If else challenge

// const markHeight=2.3

// const markWeight=78;

// const johnHeight=2.3;

// const johnWeight=78;

// let markHeight=parseFloat(prompt(`Enter Marks height:`));
// let markWeight=parseFloat(prompt(`Enter Marks weight:`));
// let johnHeight=parseFloat(prompt(`Enter john height:`));
// let johnWeight=parseFloat(prompt(`Enter john weight:`));

// let markBMI=markWeight/(markHeight**2);

// let johnBMI=johnWeight/(johnHeight**2);

// if (markBMI>johnBMI){
//   console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
// }else if(markBMI<johnBMI) {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
// }else{
//   console.log(`Mark's BMI ${markBMI} is equal to John's BMI ${johnBMI}`);
// }

// // Type conversion 
// const inputYear='1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 13);

// console.log(Number('Ramesh'));

// console.log(typeof NaN);

// console.log(String(22));

// //Type coercion

// console.log('I am '+23 + ' years old');
// console.log('23'-'10'-3)
// console.log('23'>'12')

// let n='1' + 1;
// n=n-1;
// console.log(n);

//five falsy values: 0,'',undefined,null,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));



// const money=0;
// if (money){
//   console.log(`he doesnt have with him`);
// }else{
//   console.log(`he has  ${money} with him`);
// }

// let height;
// if(height){
//   console.log(`height is defined`);
// }else{
//   console.log(`height is not defined`);
// }

//Equality operators : == vs ===

// const age = 18;
// if (age===18){
//   console.log('He just been 18 years old');
//   console.log(`he is ${age} years old`);
// }else{
//   console.log(`he is not 18 years old`);
//   console.log(`he is ${age} years old`);
// }

// const age = '18';
// if (age===18)
//   console.log('He just been 18 years old (strictly)');


// if (age=='18')
//   console.log('He just been 18 years old(loosely)');

// const fav_num=prompt('What is your favorite number?');
// console.log(fav_num);
// console.log(typeof fav_num);
// if (fav_num==23) {
//   console.log('It is a number');
// }

// if (fav_num!=23){
//   console.log('NOpe, not 23 ?')
// }else{
//   console.log('Its  23');
// }



// Boolean Logic :AND,OR,NOT

// loogical operators

const hasDriversLiscense=true;
const hasGoodVision=true;

// console.log(hasDriversLiscense && hasGoodVision);

// console.log(hasDriversLiscense || hasGoodVision);

// console.log(!hasDriversLiscense);

const shouldDrive=hasDriversLiscense && hasGoodVision;
console.log(shouldDrive);
// if(shouldDrive) {
//   console.log(`Sarah is able to drive`);
// }else{
//   console.log('Sarah is not able to drive')
// }

const isTired=false;
console.log(hasDriversLiscense &&hasGoodVision && isTired);

if(hasDriversLiscense && hasGoodVision && !isTired){
  console.log(`Sarah is able to drive`);
}else{
  console.log('Sarah is not able to drive')
}