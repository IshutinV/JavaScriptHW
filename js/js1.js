//Дано целое число. С помощью тернарного оператора определить четное оно или нет.
let result;
let number = 45;
result = (number%2) ? " не четное" : " четное";
console.log("Число "+number+result);

// Тернарный оператор ? (true_выражение):(false_выражение);
// если 1,  значит true_выражение;


//Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.
// Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.
let m = 7.67;
let n = 12.65;
let result2;
if(m<10)
result = 10 - m;
else{
    result = -10 + m;
}
if(n<10)
    result2 = 10 - n;
else{
    result2 = -10 + n;
}
if(result2 == result)
    console.log("Оба числа "+m+", "+ n + " Ближайшие к 10");
else {
    if (result < result2)
        console.log("Ближайшее к 10 из двух чисел " + m + ", " + n + " , число - " + m);
    else {
        console.log("Ближайшее к 10 из двух чисел " + m + ", " + n + " , число - " + n);
    }
}
//Задайте высоту, длину и ширину прямоугольного параллелепипеда и найти его площадь.
// Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль.
let height = 25;
let length = 15
let width = 15;
let s = 2*(height*length+height*width+width*length);
console.log("Площадь прямоугольного параллепипеда h= "+height+" a= "+length + " b= "+width+ " равна "+s);
if(width>height)
    console.log("Ширина параллепипеда b= "+ width+ " больше высоты h= "+height);
else{
    console.log("Ширина параллепипеда b= "+ width+ " меньше высоты h= "+height);
}
