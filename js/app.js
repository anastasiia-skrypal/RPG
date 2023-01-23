// // Задача №1
// // Написать функцию калькулятор, в которую будут передаваться значения, 
// // которые ввел пользователь. Арифметическая операция также вводится пользователем.

// function calc(x,math,y) {
// 	switch(math) {
// 		case "+":
// 			return x + y;
// 			break;
// 		case "*":
// 			return x * y;
// 			break;
// 		case "-":
// 			return x - y;	
// 			break;
// 		case "/":
// 			return x / y;
// 			break;	
// 	}
// }

// var x = parseInt(prompt("1 number ?"));
// var math = prompt("math symbol ?");
// var y = parseInt(prompt("2 number ?"));


// document.write(calc(x,math,y));


// // Задача №2
// // Напишите функцию, которая будет принимать число и определять:

// // Является ли введенное число положительным или отрицательным.
// // Является ли оно простым


// function plus(x) {
// 	if (x > 0) {
// 		return "Число положительное !";
// 	}
// 	if (x < 0) {
// 		return "Число отрицательное !";
// 	}
// }

// function int(x) {
// 	for(var count = 2; count < x; count++) {
// 		if(x % count === 0) {
// 			return "Число  не является простым !";
// 		}	
// 		return "Число является простым !";
// 	}
// }

// var x = parseInt(prompt("number ?"));

// document.write(plus(x) + "<br>" + int(x));
















