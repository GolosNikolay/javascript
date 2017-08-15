"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

//Function Declaration
sayHello(prompt('Введите ваше имя'),''); //сработает

function sayHello(name) {
	alert('Привет, ' + name + '!');
}

//Function Expression (работает при объявлении в конструкции if)
sayGoodbye(prompt('Введите ваше имя'),''); //не сработает т.к. sayGoogbye объявлена ниже

var sayGoodbye = function(name){
	alert('Прощай, ' + name + '!');
}


//New Function
var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3