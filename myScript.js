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



//Копирование одного объекта в другой
// ВАЖНО! В переменной лежит ссылка на объект, а не сам объект 
var person = {
	name: 'Vasya',
	profession: 'Sporstman',
	pat: 'Dog'
};

var person2 = {};
for(var key in person) {
	person2[key] = person[key];
}
console.log(person2);

//Пример ошибки консоли, сначала она посчитает microsecond,
//а потом выведет microsecond = 123459
var time = {
  year: 2345,
  month: 11,
  day: 10,
  hour: 11,
  minute: 12,
  second: 13,
  microsecond: 123456
}

console.log(time); // (*)
time.microsecond++; // (**)

console.log(time);
time.microsecond++;

console.log(time);
time.microsecond++;