"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

var user = {  // создаем объект user
	name: "Vasya",
	age: 21
};
console.log(user.age);

console.log(typeof user); // смотрим тип переменной user

// примитиыные типы пемеренных - number, string, boolean, null, undefined
// более сложный тип - object