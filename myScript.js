"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

function changeBackground() {
	var status = 1;
	return function() {
		if( (status%2) == 1 ) {
			document.body.style.backgroundColor = '#eeeeee';
		}
		else document.body.style.backgroundColor = '';
		return status++;
	}
}
var change = changeBackground();