/* ДЗ 3 - работа с исключениями и отладчиком */

/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
 */
function isAllTrue(array, fn) {
    for (let i=0; i < array.length; i++) {
        if (fn(array[i]) === false) {
            return false;
        }
    }

    if (!(array instanceof Array) || array.length === 0) {
        throw new Error('empty array');

    } else if (typeof fn != 'function') {
        throw new Error('fn is not a function');

    }

    try {
        return true;
    } catch (e) {
        console.log(e.message);
    }

}

// isAllTrue([1, 2, 3, 4, 5, 6, 12], n => n < 10);
// isAllTrue({}, n => n < 10);

/*
 Задание 2:

 2.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
 */
function isSomeTrue(array, fn) {
    for (let i=0; i < array.length; i++) {
        if (fn(array[i]) === true) {
            return true;
        }
    }

    if (!(array instanceof Array) || array.length === 0) {
        throw new Error('empty array');
    } else if (typeof fn != 'function') {
        throw new Error('fn is not a function');

    }

    try {
        return false;

    } catch (e) {
        console.log(e.message);
    }

}

// let result = isSomeTrue([1, 2, 10, 4, 5], n => n > 20)

// console.log(result);
/*
 Задание 3:

 3.1: Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
	let array = [];

    for (let i = 1; i < arguments.length; i++){
        fn(arguments[i]);
	}
	if (typeof fn != 'function') {
		throw new Error("fn is not a function");
	}

    if(arguments.length-1 === 0){
		return array;
	}

	try {

		return true
	}catch(e){
		array.push(fn);
		return array;
		console.log(e.message);
	}



}
// console.log(returnBadArguments((n => a + b)))

/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number = 0) {
	if (typeof number != 'number') {
		throw new Error("number is not a number");
	}

    let obj = {
	    number,
        sum:function(){
			let res = 0;
			for (let i = 1; i < arguments.length; i++){
				let res = 0;
				res += this.number + arguments[i];
				// return res;
				// console.log(res);
			}
			return res;

		},
		dif(){
			let res = 0;
			for (let i = 1; i < arguments.length; i++){
				res += this.number - arguments[i];
			}
			return res;
        },
		div(){
			for (let i = 1; i < arguments.length; i++){
				number += number / arguments[i];
				if (arguments[i] === 0){
					throw new Error("division by 0");
				}
			}
			return number;
        },
		mul(){
			// for (let i = 1; i < arguments.length; i++){
			// 	number += number * arguments[i];
			// }
			// return number;
        },

    }



	try {
		return obj

	}catch(e){
		console.log(e.message);
	}


	//
	// function fn(array){
	 //    let sum = 0;
	 //    let number = 2;
	 //    for (let i = 0; i < array.length; i++){
		// 	sum += arguments[i];
		// 	console.log(sum)
	//
	 //    }
		// return number - sum;
	//
	// }
    // console.log(fn([1,2,3]))

}

console.log(calculator(13, 12, 11));



/* При решении задач, пострайтесь использовать отладчик */

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
