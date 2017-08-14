"use strict"; // чтобы работать по стандарту ecmaScript это ставится в начало документа
			  // однако не поддерживается в IE9, чтобы это исправить можно для старых браузеров подключить
			  // библиотеку ES5 shim

//Преобразования

var text = null, result;
result = String(text) === "null" ? true : false;
if (result) {
	alert("Variable text has text type!");
}

var number = "123";
alert(typeof(+number));

/*" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
true + false = 1;


null + 1 = 1 // (1)
undefined + 1 = NaN // (2)
null == "\n0\n" = false // (3)
+null == +"\n0\n" = true // (5)

1. null при численном преобразовании становится 0
2. undefined при численном преобразовании становится NaN
3. При сравнении == с null преобразования не происходит, есть жёсткое правило: null == undefined и только.
4. И левая и правая часть == преобразуются к числу 0.*/