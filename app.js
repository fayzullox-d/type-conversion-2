/** @format */

//==================================================//

// 1-masala. Sonlarni chiqarish
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//==================================================//

console.log("2-masala. Juft sonlar");

//==================================================//
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//==================================================//

console.log("3-masala. Sonlar yig'indisi");

//==================================================//
let sum3 = 0;
for (let i = 1; i <= 50; i++) {
  sum3 += i;
}
console.log(sum3);

//==================================================//

console.log("4-masala. Toq sonlar yig'indisi");

//==================================================//
let sum4 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum4 += i;
  }
}
console.log(sum4);

//==================================================//

console.log("5-masala. 3 ga bo'linadigan sonlar");

//==================================================//
let count5 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
    count5++;
  }
}
console.log("Soni:", count5);

//==================================================//

console.log("6-masala. Sonning ko'paytirish jadvali");

//==================================================//
let number6 = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${number6} x ${i} = ${number6 * i}`);
}

//==================================================//

console.log("7-masala. Musbat va manfiy sonlar");

//==================================================//
let number7 = -15;
if (number7 > 0) {
  for (let i = 1; i <= number7; i++) {
    console.log(i);
  }
} else if (number7 < 0) {
  let mod = -number7;
  for (let i = 1; i <= mod; i++) {
    console.log(i);
  }
} else {
  console.log("Son nolga teng");
}

//==================================================//

console.log("8-masala. Raqamni topish");

//==================================================//
let secretNumber = 8;
for (let i = 1; i <= 10; i++) {
  if (i === secretNumber) {
    console.log("Son topildi");
    break;
  } else {
    console.log("Bu son emas");
  }
}

//==================================================//

console.log("9-masala. Sonning raqamlarini sanash");

//==================================================//
let number9 = 58324;
let digitsCount = 0;
let temp9 = number9;
if (temp9 === 0) {
  digitsCount = 1;
} else {
  while (temp9 > 0) {
    digitsCount++;
    temp9 = Math.floor(temp9 / 10);
  }
}
console.log("Soni:", digitsCount);

//==================================================//

console.log("10-masala. Mukammal sonni aniqlash");

//==================================================//
let number10 = 28;
let sum10 = 0;
for (let i = 1; i < number10; i++) {
  if (number10 % i === 0) {
    sum10 += i;
  }
}
if (sum10 === number10) {
  console.log("Bu mukammal son");
} else {
  console.log("Bu mukammal son emas");
}

//==================================================//
