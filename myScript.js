"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

var check = true, result, age;
while(check){
	age = prompt("Сколько вам лет?",'');
	result = age >= 18 ? true : false;
	if (result){
		alert("Поздравляю, ты можешь смотреть страницу!");
		check = false;
	}
	else {
		alert("Ты еще малой!");
	}
}
