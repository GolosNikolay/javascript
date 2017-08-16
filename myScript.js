"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

function changeBackground() {
	var colors = ['#fbdcf8', '#dce1fb', '#dcfbf6','#e1fbdc'];
	var status = 0;
	return function() {
		document.body.style.backgroundColor = colors[status];
		console.log(colors[status]);
		return status < 3 ? status++ : status = 0;
	}
}
var change = changeBackground();
