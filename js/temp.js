'use strict'

// function calculateVolumeAndArea(num) {
//     if (typeof num === 'string' ||  num % 1 !== 0 || num <= 0 ){
//         return 'При вычислении произошла ошибка';
//     } else {
//         const v = num * num * num;
//         const s = num * num * 6;
//         return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
//     }
// }
// console.log(calculateVolumeAndArea(15));

// <<<<<<<<<<<<  ==================================================================================  >>>>>>>>>>>>
// function getCoupeNumber(num) {
//         if (typeof num === 'string' ||  num % 1 !== 0 || num < 0 ){
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if (num === 0 || num > 36) {
//         return 'Таких мест в вагоне не существует';
//     } else {
//         return Math.ceil(num / 4);
//     }
// }
// console.log(getCoupeNumber());
// <<<<<<<<<<<<  ===============================================================================  >>>>>>>>>>>>
// function getTimeFromMinutes(min) {
//     if (typeof min === 'string' ||  min % 1 !== 0 || min < 0 ){
//         return 'Ошибка, проверьте данные';
//     }
//     const times = ['часов', 'час', 'часа'];
//     const hour = parseInt(min / 60);
//     const minutes = min % 60;
//     const lastHours = hour % 10;
//     if (lastHours === 1){
//         return `Это ${hour} ${times[1]} и ${minutes} минут`;
//     } else if (lastHours >= 2 && lastHours <= 4){
//         return `Это ${hour} ${times[2]} и ${minutes} минут`;
//     } else {
//         return `Это ${hour} ${times[0]} и ${minutes} минут`;
//     }
// }
// console.log(getTimeFromMinutes('9'));
// <<<<<<<<<<<<  =========================================================================  >>>>>>>>>>>>
// function findMaxNumber(...args) {
//   if (isNaN(args[0]) || args.length < 4){
//     return 0;
//   }
//   let maxNumber = args[0];
//   for (let i = 0; i < args.length; i++) {
//     if (typeof args[i] !== 'number') {
//       return 0;
//     } else if(args[i] > maxNumber){
//       maxNumber = args[i];
//     }
//   }
//   return maxNumber;
// }

// console.log(findMaxNumber(1, 5, 6, 10.9));

// <<<<<<<<<<<<  ==========================================================================  >>>>>>>>>>>>

// function fib(num) {
//   if (typeof num !== 'number' || num === 0 || num % 1 !== 0){
//     return '';
//   } else if (num === 1){
//     return '0';
//   }
//   let result = '0 1 1';
//   let prev = 1;
//   let next = 1;
//   let tmp;
//   for (let i = 1; i < num - 2; i++) {
//     result += ` ${prev + next}`;
//     tmp = prev;
//     prev = next;
//     next = prev + tmp;
//   }
//   return result;
// }
// console.log(fib(7));
// <<<<<<<<<<<<  ========================================================================  >>>>>>>>>>>>

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs(plan){
//       let langs = '';
//       plan.skills.languages.forEach(el => langs += ` ${el.toUpperCase()}`);
//       return `Мне ${plan.age} и я владею языками:${langs}`;
//     }
// };

// function showExperience(plan) {
//   return `${plan.skills.exp}`;
// }

// function showProgrammingLangs(plan) {
//     let result = '';
//     for (const key in plan.skills.programmingLangs) {
//       result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//     }
//     return result;
// }
// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// <<<<<<<<<<<<  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  >>>>>>>>>>>>

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   if (arr.length === 0) return 'Семья пуста';
//     let result = 'Семья состоит из: ';
//     arr.forEach(el => result += `${el} `);
//     return result;
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(el => console.log(el.toLowerCase()))
// }

// console.log(showFamily(family));
// console.log(standardizeStrings(favoriteCities));

// <<<<<<<<<<<<  ==============================================================================  >>>>>>>>>>>>

// const someString = 'This is some strange string';

// function reverse(str) {
//   if (typeof str !== 'string') return 'Ошибка!'; 
//   return str.split('').reverse().join('');
// }

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//   if (!arr.length) return 'Нет доступных валют';
//   const allCurrencies = [...baseCurrencies, ...additionalCurrencies];
//   let needsCurr = [...arr];
//   if (needsCurr.length === 1 && needsCurr.includes(missingCurr)) {
//     return 'Нет доступных валют';
//   }
//   let result = `Доступные валюты:\n`;
//   allCurrencies.forEach(el => {
//     if (needsCurr.includes(el) && el !== missingCurr) {
//       result += `${el}\n`;
//     }
//   });
//   return result;
// }

// console.log(reverse(someString));
// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));

