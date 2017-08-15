"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

//Преобразования

function checkName(name){
	if (name == 'null' || name == ''){
		return ('Вы не ввели имя!');
	}
	return ('Ваше имя ' + name + '!');
}

var result = checkName(prompt("Ведите ваше имя", ''));
alert(result);


function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age){
	return age > 18 ? true : confirm('Родители разрешили?');
}
function checkAge(age){
	return (age > 18) || confirm('Родители разрешили?');
}