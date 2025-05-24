const arr = ['olma', 'banan', 'gilos', 'shaftoli'];
alert('Boshlanishda Arrayining uzunligi: ' + arr.length);
console.log(arr);


let savol = confirm('Sizning arrayingizdan ma\'lumotlarni olib tashlamoqchimizmi?');

if (savol) {
  const removed = arr.pop(); // сохраняем удалённый элемент
  console.log(removed); // показываем, что удалено
  console.log(arr); // новый массив
}

let savol2 = confirm('Arrayning uzunligini bilmoqchimisiz?');
if (savol2) {
  alert('Hozirgi array uzunligi: ' + arr.length);
}

let yangiMalumot = prompt('Ma\'lumot qo\'shing:');
if (yangiMalumot) {
  arr.push(yangiMalumot); // добавляем в массив
  console.log(yangiMalumot); // показываем, что добавлено
  console.log(arr); // массив после добавления
}

let savol3 = confirm('Arrayning uzunligini bilmoqchimisiz?');
if (savol3) {
  alert('Yangi array uzunligi: ' + arr.length);

}

