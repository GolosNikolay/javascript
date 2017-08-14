"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim
var error = "Ублюдок, мать твою, ты идиот, поэтому пиши 'Да'!";
var secondError = "Ты полный идиот раз не нажал OK";
var check = true;
var name = "Привет, Николай!";
alert(name);

while (check){
	var warning = "Ты идиот?";
	var result = prompt(warning, 'Да');
	if (result != 'Да'){
		alert(error);
	}
	else{
		check = false;
		var lastResult = confirm("Чтобы окончательно убедиться, что ты идиот нажмите 'OK'");
		if (!lastResult) {
			alert(secondError);
			check = true;
		}
		else {
			alert("Поздравляю, ты окончательно идиот!");
		}
	}
}
