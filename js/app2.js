// // Задача №1
// // Запросите 2 числа и нарисуйте прямоугольник из X-ов, 
// // где первое число - это ширина, а второе - высота.
// // Пример:
// // мы принимаем 2 числа, x = 3, y = 4;
// // Результат:
// // XXX
// // XXX
// // XXX
// // XXX

// var x = parseInt(prompt("Integer 1?"));
// var y = parseInt(prompt("Integer 2?"));

// for (var counterY = 1; counterY <= y; counterY++) {
// 	for (var counterX = 1; counterX <= x; counterX++) {
// 		document.write("X");
// 	}
// 	document.write("<br>");
// }


// // Задача №2
// // Запросите у пользователя n количество чисел 
// // (пользователь сам решает когда закончить ввод чисел), 
// // найдите и выведите самое большое число, самое маленькое, 
// // сумму всех чисел, среднее арифметическое, 
// // вывести отдельно все четные и нечетные числа (опционально).

// var integer;
// var min = 999999999;
// var max = -999999999;
// var sum = 0;
// var counter = 0;
// var even = "";
// var odd = "";


// do {
// 	integer = prompt("Integer ?");

// 	if (integer == null) {
// 		break;
// 	}

// 	else {
// 		var number = integer;
// 		integer = +integer;
// 		counter++;
// 	}

// 	if (integer > max) {
// 		max = integer;
// 	}

// 	if (integer < min) {
// 		min = integer;
// 	}

// 	sum += integer;

// 	if (number % 2 == 0 ) {
// 		even += number + " ";
// 	}
// 	else {
// 		odd += number + " ";
// 	}
// }

// while (true);

// document.write("Min: " + min + "<br>Max: " + max + 
// 	"<br>Sum: " + sum + "<br>Average: " + sum/counter + 
// 	"<br>Even integers: " + even + "<br>Odd integers: " + odd);




// // Задача №3
// // Запросите у пользователя 2 числа и выведите все числа 
// // в промежутке между двумя числами 
// // (пользователь вводит 2 и 6, выводится 3,4,5). 
// // Вывести ошибку, если числа одинаковые. 
// // Учесть, что первое введенное число может быть больше первого. 
// // Запросить у пользователя каким способом вывести числа на экран 
// // ( в строку через пробел, через запятую или в столбик)

// var int1 = parseInt(prompt("Integer 1?"));
// var int2 = parseInt(prompt("Integer 2?"));
// var int = 0;
// var all = "";
// var method = prompt("Каким способом вывести числа на экран?\nЧерез пробел - введите '1'\nЧерез запятую - введите '2'\nВ столбик - введите '3'");

// if (int1 == int2) {
//     	alert("Error!");
//     }

// while (int1 < int2){
	
// 	int1++;
    	
//     if (int1 == int2) 
//     	break;

// 	if (method == "1") {
// 		all += int1 + " ";
// 	}  

// 	if (method == "2") {
// 		all +=  int1 + ", ";
// 	} 

// 	if (method == "3") {
// 		all +=  int1 + "<br>";
// 	} 

// }

// while (int2 < int1) {
// 	int2++;
    	
//     if (int2 == int1) 
//     	break;

// 	if (method == "1") {
// 		all += int2 + " ";
// 	}  

// 	if (method == "2") {
// 		all +=  int2 + ", ";
// 	} 

// 	if (method == "3") {
// 		all +=  int2 + "<br>";
// 	} 
// }

//   document.write("All: " + "<br>" + all);




// // Задача №4
// // Запросите у пользователя число 
// // (число не должно быть меньше 10) 
// // и выведите все числа от 0 до заданного пользователем числа 3 разными циклами. 
// // каждый десятый элемент выводить красным цветом. 
// // Каждый третий - зеленым. Если элемент и по счету и третий и десятый - 
// // выводить синим цветом.



// var integer = parseInt(prompt("Integer ?"));
// var counter = 0;
// var all = "";

// if (integer < 10) {
// 	alert ("Integer must be begger than 10");
// }

// // way 1

// while (integer > counter) {
// 	all += "<span>" + counter + "</span>" + " ";
// 	++counter;
// }

// // way 2

// for (counter = 0; integer > counter; ++counter) {
// 	all += "<span>" + counter + "</span>" + " ";
// }

// // way 3

// do {
// 	all += "<span>" + counter + "</span>" + " ";
// 	++counter;
// }
// while (integer > counter);

// document.write("<div>" + all + "</div");




// // Задача №5
// // Нарисовать шахматную доску при помощи циклов (потребуются таблицы)


// document.write("<table style='border-collapse: collapse; height:200px; width: 200px;'>");

// for (var i = 0; i < 8; i++){
// 	var trOpen = document.write("<tr>");
// 	for (var j = 0; j < 8; j++){
// 		if (i%2 == j%2){
// 			var tdOpen = document.write("<td style='background-color: black;'>");
// 		}
// 		else {
// 			var tdOpen = document.write("<td>");
// 		}
// 		var tdClose = document.write("</td>");
// 	}
// 	var trClose = document.write("</tr>");
// }

// document.write("</table>");




// Задача №6
// // Нарисуйте в браузере с помощью буквы Х и циклов:
// //  прямоугольник
// // XXXXXXXXXX
// // XXXXXXXXXX
// // XXXXXXXXXX
// // XXXXXXXXXX


// var x = 10;
// var y = 4;

// for (var counterY = 1; counterY <= y; counterY++) {
// 	for (var counterX = 1; counterX <= x; counterX++) {
// 		document.write("X");
// 	}
// 	document.write("<br>");
// }


// //  прямоугольный треугольник
// //    X 
// //   XXX
// //  XXXXX
// // XXXXXXX


// for(var y = 0; y < 4; y++){

// 	for(var x = 4; x > y; x--){
// 	    document.write(".");
// 	}	

// 	for (var z = 0; z <= y; ++z) {
// 		document.write("X");
// 	}
// document.write("<br>");
// }



// //  равносторонний треугольник
// // X
// // XX
// // XXX
// // XXXX


// for(var x = 1; x < 5; x++){
// 	for(var y = 0; y < x; y++){
// 	    document.write("X");
// 	}
// 	document.write("<br>");
// }



// //  ромб
// //    X
// //   XXX
// //  XXXXX
// // XXXXXXX
// //  XXXXX
// //   XXX
// //    X


// for(var y = 1; y < 4; y++){

// 	for(var x = 4; x > y; x--){
// 	    document.write(".");
// 	}	

// 	for (var z = 0; z < y; z++) {
// 		document.write("X");
// 	}
// 	document.write("<br>");
// }

// for(var y = 0; y < 4; y++){
// 	for(var x = 0; x < y; x++){
// 	    document.write(".");
// 	}
// 	for (var z = 4; z > y; z--) {
// 		document.write("X");
// 	}

// 	document.write("<br>");
// }	





