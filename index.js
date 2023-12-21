// // function expresssion 

// const sum1=function(a, b) {
//     return res=a+b;
// };

// console.log(sum1(2, 3 ));

// // arrow function 

// const sum2=(a, b) => a+b;

// console.log(sum2(2, 4)); 

// // IIFI 
// (function() {
//     var surname = "Doe";
// }) (); 



//                 ToString

// function NumberToString(arg) {
//     let result='';

//     if (arg<10 || arg>99) {
//      return  result="Ikki xonali son kiritmadingiz";
//     }

//     let birlik=Math.trunc(arg%10);
//     let onlik=Math.trunc(arg/10);
//     let kasr=arg*10%10;
    
//     switch (onlik) {
//         case 1:
//             result="o'n";
//             break;
    
//         case 2:
//             result="yigirma";
//             break;
    
//         case 3:
//             result="o'ttiz";
//             break;
    
//         case 4:
//             result="qirq";
//             break;
    
//         case 5:
//             result="ellik";
//             break;
    
//         case 6:
//             result="oltmish";
//             break;
    
//         case 7:
//             result="yetmish";
//             break;
    
//         case 8:
//             result="sakson";
//             break;
    
//         case 9:
//             result="to'qson";
//             break;
    
//         default:
//           return  result="Bunday son mavjud emas";
//     }

    

//     switch (birlik) {
//         case 0:
//             result=result;
//             break;
    
//         case 1:
//             result=result+" bir";
//             break;
    
//         case 2:
//             result=result+" ikki";
//             break;
    
//         case 3:
//             result=result+" uch";;
//             break;
    
//         case 4:
//             result=result+" to'rt";
//             break;
    
//         case 5:
//             result=result + " besh";;
//             break;
    
//         case 6:
//             result=result+" olti";
//             break;
    
//         case 7:
//             result=result+" yetti";
//             break;
    
//         case 8:
//             result=result+" sakkiz";
//             break;
    
//         case 9:
//             result=result+" to'qqiz";
//             break;
    
    
//     }

//         switch (kasr) {
//             case 0:
//                 result=result;
//                 break;
        
//             case 1:
//                 result=result+" butun o'ndan bir";
//                 break;
        
//             case 2:
//                 result=result+" butun o'ndan ikki";
//                 break;
        
//             case 3:
//                 result=result+" butun o'ndan uch";;
//                 break;
        
//             case 4:
//                 result=result+" butun o'ndan to'rt";
//                 break;
        
//             case 5:
//                 result=result + " butun o'ndan besh";;
//                 break;
        
//             case 6:
//                 result=result+" butun o'ndan olti";
//                 break;
        
//             case 7:
//                 result=result+" butun o'ndan yetti";
//                 break;
        
//             case 8:
//                 result=result+" butun o'ndan sakkiz";
//                 break;
        
//             case 9:
//                 result=result+" butun o'ndan to'qqiz";
//                 break;
        
//             default:
//                 result="Bunday son mavjud emas";
//                 break;
            
//     }
   
//     return result;
// }

// console.log(NumberToString(1.4));



// FIRST EXEMPLE 
// let arr = [23, 45, 34, 21, 56];

// function countOdd(arg) {
//      let counter=0;
//      for (let i = 0; i < arg.length; i++) {
//           if (arg[i]%2==1) {
//                counter++;
//           }
//      }

//      return counter;
// }



// SECOND EXEMPLE 
// let n=+prompt("Sonni kiriting");
// let n1=+prompt("Sonni kiriting");
// let n2=+prompt("Sonni kiriting");
// let n3=+prompt("Sonni kiriting");
// let n4=+prompt("Sonni kiriting");
// let n5=+prompt("Sonni kiriting");
// let n6=+prompt("Sonni kiriting");
// let arr = [n,n1,n2,n3,n4,n5,n6];

// const karraliSon=function(arg) {
//      let mult=1;
//      for (let i = 0; i < arg.length; i++) {
//           if (arg[i]%3==0&&arg[i]%7==0) {
//                mult*=arg[i];
//                console.log(arg[i]+' soni '+i+' element');
//           }
//      }

//      return mult;
// }

// console.log("Ushbu sonlarni ko'paytmasi "+karraliSon(arr)+" ga teng");



// // THIRD EXEMPLE 
// let arr = [2,3,43,21,43,4,22];

// const toqSon=function(arg){
//      let res=[];
//      for (let i = 0; i < arg.length; i++) {
//                     if (arg[i]%2==1) {
//                          res.unshift(arg[i]);
//                     }
//      }

//      return res;
// }


// console.log(toqSon(arr));



// FOURTH EXEMPLE 
// let arr = [2,3,43,21,11,4,22];

// const juftIndexSon=function(arg){
//      let res=[];
//      for (let i = 0; i < arg.length; i++) {
//                     if (i%2==0) {
//                          res.push(arg[i]);
//                     }
//      }

//      return res;
// }


// console.log(juftIndexSon(arr));


// FIFTH EXEMPLE 
// let wordArray=["Hello", "Word", "World", "Pure", "Software"];

// const words=(arg) => {
//      let res=[];
//      for (let i = 0; i < arg.length; i++) {
                  
//                   res.push(arg[i].charAt());
//      }

//      return res;
// }

// console.log(words(wordArray));


// let tubArray = [23,11,14,21,31,43,43,43,44];

// const tubSon=(arg) => {
//      let counter=0;
//      for (let i = 0; i < arg.length; i++) {
//           let counter1=0;
//           for (let j = 1; j <= arg[i]; j++) {
//               if (arg[i]%j==0) {
//                counter1++;
//               }
//           }

//           if (counter1==2) {
//                counter++;
//           }
//      }

//      return counter;
// }


// console.log(tubSon(tubArray));


// SEVENTH EXEMPLE 
 
let arr = [10,20,30,22,3,45,76,40];

const karraliSon=function(arg) {
     let result=[];
     for (let i = 0; i < arg.length; i++) {
          if (arg[i]%2==0&&arg[i]%5==0) {
               result.push(arg[i]);
          }
     }

     return result;
}

console.log(karraliSon(arr));

