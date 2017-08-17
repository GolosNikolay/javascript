"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim


// Замыкаие через вложенную функцию
function counter() {
	var counter = 1;
	return function() {
		return counter++;
	};
}

var newCounter = counter();
var nextCounter = counter();

//Замыкание через вложенную функцию с дополнительными методами
function objCounter() {
	var currentCounter = 1;

	function counter() {
		return currentCounter++;
	}
	counter.setValue = function(value) {
		currentCounter = value;
	}
	counter.reset = function() {
		currentCounter = 0;
	}

	return counter;
}

var newObjCounter = objCounter();
newObjCounter.setValue(5);




function makeBuffer() {
	var bufferString = '';

	function buffer() {
		return arguments.length > 0 ? buffer.add(arguments[0]) : buffer.show();
	}
	buffer.add = function(addString) {
		bufferString += addString;
	}
	buffer.show = function() {
		return bufferString;
	}
	buffer.clear = function() {
		bufferString = ;
	}
	return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer.clear();
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert( buffer2() ); // '010'
