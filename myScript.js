"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

function pow(x,n) {
	if (n != 1) {
		return x * pow(x, n-1);
	}
	else{
		return x;
	}
}

console.log(pow(2,10));

var number = +prompt("Введите число",100), result = 0;
for (var i = 1; i <= number; i++) {
	result += i;
}
console.log(result);


function sum(n) {
	if (n >= 1 ) {
		return n + sum(n-1);
	}
	else return n;
}
console.log(sum(100));