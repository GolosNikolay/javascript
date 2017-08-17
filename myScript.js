"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

//Именнованые аргументы - передача в качества параметра для функции объекта
//Можно использовать, например, когда нужно изменить некоторые параметры использующиеся по умолчанию

function createModal(parametrs) {
	var width = parametrs.width || 150;
	var height = parametrs.height || 'auto';
	var backgound = parametrs.backgound || '#fafafa';
	var title = parametrs.title || 'Внимание!';
	var titleColor = parametrs.titleColor || 'Orange';
}

createModal({
	width: 400,
	title: 'Будьте добры!'
});