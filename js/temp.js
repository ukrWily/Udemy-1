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
function getTimeFromMinutes(min) {
    if (typeof min === 'string' ||  min % 1 !== 0 || min < 0 ){
        return 'Ошибка, проверьте данные';
    }
    const times = ['часов', 'час', 'часа'];
    const hour = parseInt(min / 60);
    const minutes = min % 60;
    const lastHours = hour % 10;
    if (lastHours === 1){
        return `Это ${hour} ${times[1]} и ${minutes} минут`;
    } else if (lastHours >= 2 && lastHours <= 4){
        return `Это ${hour} ${times[2]} и ${minutes} минут`;
    } else {
        return `Это ${hour} ${times[0]} и ${minutes} минут`;
    }
}
console.log(getTimeFromMinutes('9'));
// <<<<<<<<<<<<  =========================================================================  >>>>>>>>>>>>
function findMaxNumber(...args) {
  if (isNaN(args[0]) || args.length < 4){
    return 0;
  }
  let maxNumber = args[0];
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'number') {
      return 0;
    } else if(args[i] > maxNumber){
      maxNumber = args[i];
    }
  }
  return maxNumber;
}

console.log(findMaxNumber(1, 5, 6, 10.9));

// <<<<<<<<<<<<  ==========================================================================  >>>>>>>>>>>>

function fib(num) {
  if (typeof num !== 'number' || num === 0 || num % 1 !== 0){
    return '';
  } else if (num === 1){
    return '0';
  }
  let result = '0 1 1';
  let prev = 1;
  let next = 1;
  let tmp;
  for (let i = 1; i < num - 2; i++) {
    result += ` ${prev + next}`;
    tmp = prev;
    prev = next;
    next = prev + tmp;
  }
  return result;
}
console.log(fib(7));