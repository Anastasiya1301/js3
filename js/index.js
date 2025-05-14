const name = "Yuna";
const age = 12;
const message = 'Jungkook' + 'is' + 'Happy';
console.log(message);
let result 
result = 3 + 3 + '3';
console.log(result);
console.log(typeof result);

const yunaMessage = 'влад число пи';
console.log(yunaMessage.length);//считает символы

console.log(yunaMessage.toLowerCase());//делает текст одного размера
console.log(yunaMessage.toUpperCase());//символы с большой буквы все

console.log(yunaMessage);

console.log(yunaMessage.indexOf('pi'));//вычислит его индекс в котором он находится. если такое число есть то любое число, если нет то -1
console.log(yunaMessage.indexOf('Hello'));

console.log(yunaMessage.includes('vladislav'));//проверяет ли входит или нет
console.log(yunaMessage.includes('Vladislav'));

console.log(yunaMessage.startsWith('vladi'));
console.log(yunaMessage.endsWith('?'));

console.log(yunaMessage.padEnd(23, '?'));//продлевает после фразы
console.log(yunaMessage.padStart(35, 'pi'));//продлевает перед фразы

const name1 = 'Jungkook';
const age1 = 153;
const mood = 'sad';

const yunaMess = `My name is ${name1}, i'm ${age1} years old and ${mood}`;
console.log(yunaMess);

// console.log(`result = ${2 + 2 . }`);