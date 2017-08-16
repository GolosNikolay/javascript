"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

//Объект как ассоциативный массив
var user = {};
user.name = "Vasya";
user.surname = "Petrov";
user['name'] = "Sergei";
user.age = 21;

//Находим все ключи объекта 
for (var key in user) {
	console.log('Название ' + key + ' Значение ' + user[key]);
}
console.log(Object.keys(user).length);

//Задание
function isEmpty(obj) {
	for (var key in obj){
		return true;
	}
	return false;
}

var schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

console.log( isEmpty(schedule) ); // false
