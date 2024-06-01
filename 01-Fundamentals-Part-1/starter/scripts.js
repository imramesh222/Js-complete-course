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

const birthYear =2012;
let century;
if (birthYear<=2000){
  century=20;
  console.log('he was born in the 20th century');
}else{
  century=21;
  console.log('he was born in the 21st century');
}
console.log(`he is ${century} years old and can start driving`);