"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

// Псевдо массив arguments содержит все параметры, которые были переданы функции
// С помощью него можно скопировать свойства одних объектов в другие
var mother = {
	children: 3,
	kitchen: true,
	job: false 
};
var father = {
	name: 'Anrey',
	car: true
};
var child = {
	age: 12,
	school: '278' 
};

copy(mother, father, child);
console.log(mother);
function copy() {
	var dst = arguments[0];
	for(var i = 1; i < arguments.length; i++) {
		for(var key in arguments[i]){
			dst[key] = arguments[i][key];
		}
	}
	return dst;
}