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

// <<<<<<<<<<<<    Продвинутая задача на работу с объектами и массивами    >>>>>>>>>>>>

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// // (function)>>>    isBudgetEnough      <<<(function)
// function isBudgetEnough(data) {
//     let totalArea = 0;
//     let totalVolume = 0;
//     let budgetEnough = false;
//     data.shops.forEach(el => {
//       totalArea += +el.width * +el['length'];
//       totalVolume += ((+el.width * +el['length']) * +data.height);
//     });
//     budgetEnough = totalVolume * data.moneyPer1m3 < data.budget;
//     return budgetEnough ? 'Бюджета достаточно' : 'Бюджета недостаточно';
// }

// console.log(isBudgetEnough(shoppingMallData));

// <<<<<<<<<<<<    список учеников    >>>>>>>>>>>>

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//   let teams = [];
//   let team = [];
//   let tail = [];
//   let i = 0;
//   const more = arr.length <= 9 ? '-' : '';
  
//   arr.sort().forEach((el, index) => {
//     if (index > 8) tail.push(el);
//     if (i === 0){
//       team = [];
//       team.push(el);
//       i++;
//     } else if (i === 2){
//       team.push(el);
//       teams.push(team);
//       i = 0;
//     } else {
//       team.push(el);
//       i++;
//     }
//   });
//   teams = [...teams, `Оставшиеся студенты: ${more}${tail.join(', ')}`];
//   return teams;
// }

// console.log(sortStudentsByGroups(students));

// <<<<<<<<<<<<    teacher's variant    >>>>>>>>>>>>

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// <<<<<<<<<<<<    =====================================================================    >>>>>>>>>>>>

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = JSON.parse(JSON.stringify(data));

//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// transferWaitors(restorantData);

// <<<<<<<<<<<<    ===========================================================================================    >>>>>>>>>>>>

// function factorial(num) {
//     if (Number(num) !== num || num % 1 !== 0) {
//       return 'Enter the integer number'
//     } else if (num <= 0) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
// }

// console.log(factorial(5));