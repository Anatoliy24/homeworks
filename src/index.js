/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {

    let promise  = new Promise(function (resolve) {
        setTimeout(() => resolve(), seconds*1000)
    });

    return promise;
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {


    let promise = new Promise(function (resolve) {

        let towns;

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
        xhr.responseType = 'json';

        xhr.onload = function(){
            towns = xhr.response;
            towns.sort((a, b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
            });

            resolve(towns)

        };
        xhr.send();
    });
    return promise;
}
export {
    delayPromise,
    loadAndSortTowns
};
