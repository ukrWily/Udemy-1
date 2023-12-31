

'use strict'
// <<<<<<<<<<<<  function checkItem  >>>>>>>>>>>>
function checkItem(el){
    console.log(el);
    return (el && el !== 'null' && el.trim().length > 0 && el.trim().length < 50);
}

// <<<<<<<<<<<<  const personalMovieDB  >>>>>>>>>>>>
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // <<<<<<<<<<<<  let numberOfFilms  >>>>>>>>>>>>
    start(){
        do {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            } while (!(this.count !== 'null' && !isNaN(this.count) && +this.count > 0));
    },
    // <<<<<<<<<<<<  method detectPersonalLevel  >>>>>>>>>>>>
    detectPersonalLevel(){
        if (this.count < 10) {
                alert('Просмотрено довольно мало фильмов');
            } else if (this.count > 9 && this.count <31){
                alert('Вы классический зритель');
            } else  if (this.count > 31){
                alert('Вы киноман');
            } else {
                alert('Произошла ошибка');
            }
    },
    // <<<<<<<<<<<<  method rememberMyFilms  >>>>>>>>>>>>
    rememberMyFilms(){
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');
            console.log((checkItem(a) && checkItem(b)));
            if (checkItem(a) && checkItem(b)) {
                this.movies[a.trim()] = b.trim();
            } else {
                i--;
            }
        }
    },
    // <<<<<<<<<<<<  method writeYourGenres  >>>>>>>>>>>>
    writeYourGenres(){
        for (let i = 0; i < 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (answer === null || answer.trim().length === 0){
                i--;
            } else {
                this.genres.push(answer.trim());
            }
        }
        this.genres.forEach((el, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${el}`);
        })
    },
    // <<<<<<<<<<<<  method showMyDB  >>>>>>>>>>>>
    showMyDB(hidden){
        if (!hidden) {
            console.log(this);
        }
    },
    // <<<<<<<<<<<<  method toggleVisibleMyDB  >>>>>>>>>>>>
    toggleVisibleMyDB(){
        return this.privat === true ? this.privat = false : this.privat = true;
    }
}

personalMovieDB.start();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB);

// =====================================================================================================

