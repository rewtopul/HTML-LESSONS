var number;// четыре цифры нашего числа
var attempts = 0; //число попыток

// общая формула - min + Math.random() * (max - min)
number = Math.round(1000 + Math.random() * (9999 - 1000));
guessNumber();

function guessNumber() {
	attempts++;
	// var result=parseInt("Введите число(-1 - закончить игру)" + number, o)):
	var result = parseInt(prompt ("Введите число(-1 - закончить игру)" ));
	// игрок угадал число
	
}
	
