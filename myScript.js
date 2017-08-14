"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

var client,VKontakte, Facebook, Mail, Yandex, Google;
Mail = 'Mail';
alert(client = VKontakte || Facebook || Mail || Yandex || Google);
