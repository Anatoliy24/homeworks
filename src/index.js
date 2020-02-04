/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {
    for (let i=0; i < array.length; i++) {
        fn(array[i], i, array)
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */

function map(array, fn) {
    let arr = [];

    for (let i=0; i < array.length; i++) {
        fn(array[i], i, array);
        arr.push(array[i] * array[i])
    }

    return arr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
	let previousValue;

	let i;


	if(initial !== undefined){
		previousValue = initial;

		for (i=0; i < array.length; i++) {
            fn(previousValue, array[i], i, array);
        }


	}else{

        for (i=1; i < array.length; i++) {
			let currentItem = array[i];
			// previousValue = array[0];
			previousValue = function(currentItem, previousValue){
				return currentItem + previousValue;
			};
			fn(previousValue, currentItem, i, array);

		}
	}


    // for (i=0; i < array.length; i++) {
	// 	previousValue = array[i] + array[i];
	// 	fn(previousValue, array[i], i, array);
	//
	// }


	// let i;
	//
	// for (i=0; i < array.length; i++) {
	//
	// 	if(initial !== undefined){
	// 		return previousValue = initial;
	// 		// fn(previousValue, array[i], i, array);
	//
	//
	// 	}else{
	// 	    i=1;
	//        return previousValue = array[0];
	// 		// fn(previousValue, array[i], i, array);
	//
	//
	// 	}
	// 	fn(previousValue, array[i], i, array);
	//
	// }

}



/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let array = [];

    for (let key in obj) {
        array.push((key).toUpperCase());
    }

    return array

}
// let fun = upperProps({ name: 'Сергей', lastName: 'Петров' })
// console.log(fun);

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
