"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

//Знакомство с объектами - this
//Создаем калькулятор
var calculator = {
	read: function() {
		this.firstNumber = +prompt('Введите первое число', 5);
		this.secondNumber = +prompt('Введите второе число', 5);
	},
	sum: function() {
		return this.firstNumber + this.secondNumber;
	},
	mul: function() {
		return this.firstNumber * this.secondNumber;
	},
};

/*calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

//Констурктор
function People(age, name, sex) {

	this.age = age || 'Unknown age';
	this.name = name || 'Unknown name';
	this.sex = sex || 'Unknown sex';
	this.alertData = function() {
		console.log(this.age + ' ' + this.name + ' ' + this.sex);
	};
}

var nikita = new People(21,'Nikita','Male');
console.log(nikita);
nikita.alertData();

//Создаем калькулятор через конструктор
function Calculator() {
	this.read = function() {
		this.first = +prompt('Введите первое число', 5);
		this.second = +prompt('Введите второе число', 5);
	};
	this.sum = function() {
		return this.first + this.second;
	};
	this.mul = function() {
		return this.first * this.second;
	};
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );