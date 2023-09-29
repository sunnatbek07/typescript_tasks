
// 1
// function countM(sm: number):void{
//     console.log(sm / 100);
// }
// countM(200);

// 2
// function countT(t: number):void{
//     console.log(t / 1000);
// }
// countT(500);

// 3
// function findB(a:number, b:number):void{
//     if(a > b) console.log(a / b);
// }
// findB(50, 5)

// 4
// function findN(num:number):void{
//     console.log("onlik: " + Math.floor(num/10));
//     console.log("birlik: " + num % 10);
// }
// findN(65)

// 5
// function countSum(num:number):void{
//     console.log("Sum: " + (num % 10 + Math.floor(num/10)));
// }
// countSum(28)

// 6
// function multipleNum(num:number):void{
//     console.log("Multiple: " + (num % 10 * Math.floor(num/10)));
// }
// multipleNum(28)


// 7
// function find100(a:number):void{
//     if(a > 999) console.log(Math.floor(a / 100));
// }
// find100(1250)





////// if else

// 1
// function checkA(a:number):string{
//     if(a > 0){
//         return "A musbat";
//     } 
//     return "A manfiy"

// }
// console.log(checkA(-50))


// 2
// function toqSon(a:number):string{
//     if(a % 2 == 1){
//         return "A toq";
//     } 
//     return "A toq emas"

// }
// console.log(toqSon(16))

// 3
// function juftSon(a:number):string{
//     if(a % 2 == 0){
//         return "A juft";
//     } 
//     return "A juft emas"

// }
// console.log(juftSon(16))

// 4
// function checkNum(a:number, b:number):string{
//     if(a > 0 && b > 0){
//         return "A va B musbat";
//     } 
//     return "Musbat emas"

// }
// console.log(checkNum(16, 20))

// 5
// function checkThreeNum(a:number, b:number, c:number):bool{
//     if(a > b && b > c){
//         return true
//     } 
//     return false;

// }
// console.log(checkThreeNum(26, 10, 5))

// 6
// function checkMiddleNum(a:number, b:number, c:number):bool{
//     if(a > b && b > c){
//         return true
//     } 
//     return false;

// }
// console.log(checkMiddleNum(26, 10, 5))


// 7
// function toqSonlar(a:number, b:number):string{
//     if(a % 2 == 1 && b % 2 == 1){
//         return "A va B toq sonlar";
//     } 
//     return "A va B toq emas"

// }
// console.log(toqSonlar(9, 13))


// 8
// function checkMusbat(a:number, b:number, c:number, d:number):bool{
//     if(a > 0 && b > 0 && c > 0 && d > 0){
//         return true
//     } 
//     return false;

// }
// console.log(checkMusbat(26, 10, -5, 11))

// 9
// function ikkitaMusbat(a:number, b:number, c:number):bool{
//     if((a > 0 && b > 0) || (b > 0 && c > 0) || (a > 0 && c > 0)){
//         return true
//     } 
//     return false;

// }
// console.log(ikkitaMusbat(26, -10, 11))

// 10


// let num: number = 1;

// switch (num) {
//     case 1: console.log("Monday!"); break;
//     case 2: console.log("Tuesday!"); break;
//     case 3: console.log("Wednesday!"); break;
//     case 4: console.log("Thursday!"); break;
//     case 5: console.log("Friday!"); break;
//     case 6: console.log("Saturday!"); break;
//     case 7: console.log("Sunday!"); break;
//     default: console.log("Wrong number!");
// }


// 11

// let code: number = 99;

// switch (code) {
//     case 93: console.log("Ucell!"); break;
//     case 99: console.log("Uzmobile!"); break;
//     case 95: console.log("UMS")
//     default: console.log("Wrong number!");
// }


// 12
// function increaseNum(a: number):number{
//     if(a > 0) return a += 1;
//     return a -= 1;
// }

// console.log(increaseNum(-10))

// 13
// function increaseNum(a: number):number{
//     if(a > 0) return a += 3;
//     return a -= 2;
// }
// console.log(increaseNum(10))


// 14
// function bigNum(a:number, b:number):number{
//     return Math.max(a, b);
// }
// console.log(bigNum(45, 85))

// 15

// function bigNum(a:number, b:number, c:number):number{
//     return Math.max(a, b, c);
// }
// console.log(bigNum(415, 85, 2214))

// 16
// function bigNum(a:number, b:number, c:number):number{
//     return Math.min(a, b, c);
// }
// console.log(bigNum(415, 85, 2214))

// 18

// function showRate(a:number):number{
//     if(a >= 90 && a <= 100) return 5;
//     else if(a >= 76 && a < 90) return 4;
//     return 3;
// }
// console.log(showRate(80))

// 19

// function conditionNum(a:number):string{
//     if(a > 0 && a % 2 == 1) return "toq musbat";
//     else if(a < 0 && a % 2 == 1) return "toq manfiy";
//     else if(a > 0 && a % 2 == 0 ) return "juft musbat";
//     else if(a < 0 && a % 2 == 0 ) return "juft manfiy";

//     return "mavjud emas raqam!";
// }
// console.log(conditionNum(0))

// 20

// function showAge(a:number):number{
//     return 2023 - a;
// }
// console.log(showAge(1995))

// 21

// function findRight(a:number, b:number, c:number):bool{
//     if(a < b && b < c) return true;
//     return false;
// }
// console.log(findRight(10, 15, 20))

// 22

// function findToq(a:number, b:number):bool{
//     if(((a % 2 == 1) && (b % 2 == 0)) || ((a % 2 == 0) && (b % 2 == 1))) return true;
//     return false;
// }
// console.log(findToq(10, 15))

// 23

// function findMusbat(a:number, b:number, c:number):bool{
//     if(a>0 && b>0 && c>0) return true;
//     return false;
// }
// console.log(findMusbat(10, 15, 10))

// 24

// function findMusbat(a:number, b:number, c:number):bool{
//     if(a>0 || b>0 || c>0) return true;
//     return false;
// }
// console.log(findMusbat(10, -15, 10))

// 25

// function diffNum(a:number):bool{

//     if( (Math.trunc(a / 100)) !== (Math.trunc(a % 100 / 10)) !== (Math.trunc(a % 10))) return true;
//     return false;
// }
// console.log(diffNum(123))

// 26

// function diffNum(a:number):bool{

//     if( (Math.trunc(a / 100)) < (Math.trunc(a % 100 / 10)) && (Math.trunc(a % 100 / 10)) < (Math.trunc(a % 10))) return true;
//     return false;
// }
// console.log(diffNum(458))

