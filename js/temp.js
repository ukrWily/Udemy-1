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
//  Factorial through recursion

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

// <<<<<<<<<<<<    ================================================    >>>>>>>>>>>>
/*
Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.

        amountOfPages(5) => 5
        amountOfPages(25) => 17
        amountOfPages(1095) => 401   
        amountOfPages(185) => 97
*/

// function amountOfPages(summary){
//   let stringNumber = '';
//   let length = 1;
//   let i = 1;
//   while (true){
//     if (length >= summary){
//       break;
//     } else {
//       stringNumber += i;
//       length = stringNumber.length;
//       i++;
//     }

//     // console.log(length);
//   }
//   return i - 1;
// }
// console.log(amountOfPages(1));

// teacher's solution
// function amountOfPages(summary){
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//       result += i;
//       if (result.length === summary) {
//         n = i;
//         break;
//       }
//     }

//     return n;
//   } 

// <<<<<<<<<<<<    =====================================    >>>>>>>>>>>>
// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

// Пример:

// isPangram(«The quick brown fox jumps over the lazy dog») => true

// isPangram(«Hello world») => false

// function isPangram(string) {
//   let symbols = new Set();
//   for (let i = 0; i < string.length; i++) {
//     const letter = string[i].toLowerCase();
//     if (letter.charCodeAt() > 96 && letter.charCodeAt() < 123) {
//       symbols.add(letter);
//     }
//   }
//   return symbols.size == 26;
// }
// console.log(isPangram('The brown fox jumps over the lazy dog'));

// // teacher's solutions

// // Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// // Это должно экономить ресурсы компьютера
// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
// }

// // С другим методом и строка каждый раз преобразовывается в коллбэке
// function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((x) => string.toLowerCase().includes(x));
// }

// // При помощи цикла
// function isPangram(str) {
//     letters: for (var c = 0; c < 26; c++) {
//         for (let i = 0; i < str.length; i++) {
//             let s = str.charCodeAt(i)
//             if (s < 65 || s > 90 && s < 97 || s > 122) continue
//             if (s === 65 + c || s === 97 + c) continue letters
//         }
      
//         return false
//     }
    
//     return true
// }

// // При помощи Set
// function isPangram(string) {
//     return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
// }

// // С использованием регулярных выражений
// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }

// <<<<<<<<<<<<    =====================================================    >>>>>>>>>>>>

// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:

// deepCount([1, 5, 3]) => 3

// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)

// deepCount([1, 2, [3, 4, [5]]]) => 7

// deepCount([]) => 0

// deepCount([[[[[[[[[]]]]]]]]]) => 8

function deepCount(a){
  let count = a.length;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

console.log(deepCount([1, 2, [3, 4, [5]]]));

// teacher's solutions

// Вариант с циклом
function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

// Вариант с методом reduce
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}
