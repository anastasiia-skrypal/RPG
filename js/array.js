// // Задача 1
// // Создать 2 массива: массив arrayA и массив arrayB. 
// // Массив arrayA заполнить произвольными значениями 
// // (заполняет пользователь). После того, 
// // как пользователь закончит ввод произвольных значений - 
// // спросить сделать ли копию массива, 
// // если да - скопировать массив arrayA в массив arrayB. 
// // Для копирования массива требуется создать функцию, 
// // которая будет принимать 2 массива, 
// // как аргументы и копировать данные из первого в второй. 
// // Нельзя использовать метод slice.


// var arrayA = new Array(5);
// var arrayB = [];

// function copy() {
// 	arrayB.push([arrayA]);
// }

// for ( var i = 0; i < arrayA.length; i++) {
// 	arrayA[i] = prompt("Number ?");
// 	document.write(arrayA[i] + " ");
// }
// var save = prompt("Do you want to save an array?");

// if (save == "yes") {
// 	copy();
// }

// document.write("<br>" + arrayB);



// // Задача 2
// // Создать массив и заполнить его произвольными числами 
// // (заполняет пользователь). 
// // После заполнения отсортировать массив и вывести 
// // отсортированный массив на экран. 
// // Для сортировки требуется написать свою функцию.

// var array = new Array(5);

// for ( var i = 0; i < array.length; i++) {
// 	array[i] = prompt("Number ?");
// }
// array.sort(function (a, b) {
//     return a - b }
// );

// document.write(array);




// // Задача 3
// // Создать двумерный массив (1x2). 
// // В первом вложенном массиве хранятся имена, 
// // а во втором - соответствующий номер телефона. 
// // Пользователь самостоятельно вводить имена и телефоны. 
// // Дополнительные условия:
// // ввод имени - обязательный
// // поле телефон допускается оставить пустым
// // после каждого заполнения предоставляется выбор: 
// // закончить ввод или добавить новый контакт. 
// // после того, как пользователь закончит ввод данных 
// // и в массиве останутся пустые ячейки - сообщить об этом 
// // пользователю и предложить ему заполнить их. 
// // после завершения скрипта - вывести все значения в столбик 
// // в формате имя: телефон. 
// // вместо пустых ячеек вывести - "нет информации".

// var array = new Array(999);

// for (var i = 0; i < array.length; i++) {
// 	array[i] = new Array(2);
// }

// for(var i = 0; i < array.length; i++) {
// 	for(var j = 0; j < array[i].length; j++) {
// 		if (j%2==0){
// 			array[i][j] = prompt("Your name?");
// 			if (array[i][j] == null) {
// 				array[i][j] = prompt("Name is obligation! Write your name");
// 			}
// 			document.write(array[i][j] + ": ");
// 		}
// 		else {
// 			array[i][j] = prompt("Your phone number?");
// 			if (array[i][j] == null) {
// 				array[i][j] = "No information";
// 			}
// 			document.write(array[i][j]);
// 		}
// 	}

// 	var continueWrite = confirm("Do you want to continue?");

// 	if (continueWrite == false) {
// 		var emptyCells = confirm("There are empty cells. Want to fill??");
// 		if (emptyCells== false) {
// 			array.length = i;
// 		}
// 	}

// 	document.write("<br>");
// }	



// // Задача 4 (если ты чувствуешь в себе силы!!!)
// // Пользователь должен сам заполнить массив произвольными числами. 
// // После завершения заполнения ваш алгоритм должен вывести все 
// // совпадающие цифры и индекс ячейки, в которой они лежат. 
// // Пример: массив [3,7,9,3,0], алгоритм должен вывести 3 и индекс этих ячеек.


// var array = new Array(5);

// for ( var i = 0; i < array.length; i++) {
// 	array[i] = prompt("Number ?");
// }

// array.sort();

// for ( var i = 0; i < array.length; i++) {
// 	if (array[i] == array[i+1]) {
// 		document.write("Duplicate: " + array[i] + ". ");
// 	}
// 	if (array[i] == array[i+1]) {
// 		array.sort();
// 		document.write("Index: " + array.indexOf(array[i]) + "<br>");
// 	}
// }







