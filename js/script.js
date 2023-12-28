/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// <<<<<<<<<<<<                                                               >>>>>>>>>>>>

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

'use strict'
// <<<<<<<<<<<<  function checkItem  >>>>>>>>>>>>
function checkItem(el){
    return (el && el !== 'null' && el.length < 50);
}
// <<<<<<<<<<<<  let numberOfFilms  >>>>>>>>>>>>
let numberOfFilms;
do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    if (!checkItem(numberOfFilms) || isNaN(numberOfFilms) || +numberOfFilms < 0) alert('Произошла ошибка');
} while (!(checkItem(numberOfFilms) && !isNaN(numberOfFilms) && +numberOfFilms > 0));
// <<<<<<<<<<<<  function detectPersonalLevel  >>>>>>>>>>>>
function detectPersonalLevel(){
    if (+numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (+numberOfFilms > 9 && +numberOfFilms <31){
    alert('Вы классический зритель');
} else  if (+numberOfFilms > 31){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}
}
detectPersonalLevel();
// <<<<<<<<<<<<  const personalMovieDB  >>>>>>>>>>>>
const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
// <<<<<<<<<<<<  function rememberMyFilms  >>>>>>>>>>>>
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '').trim();
    let b = prompt('На сколько оцените его?', '').trim();

    if (checkItem(a) && checkItem(b)) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    }
}
rememberMyFilms();
// <<<<<<<<<<<<  function writeYourGenres  >>>>>>>>>>>>
function writeYourGenres(){
    for (let i = 0; i < 3; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();
        personalMovieDB.genres.push(answer);
    }
}
writeYourGenres();
// <<<<<<<<<<<<  function showMyDB  >>>>>>>>>>>>
function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
// console.log(personalMovieDB);

// ========================================================================================================

