//! ARRAY Methods

//* Push an array
//? Push Methods bizga arrayga ayngi malumot qoshish uchun ishlatilinadi va bu arrayga oxiridan malumot qoshadi
// const array = ["hello", "world"];
// array.push("nima gaplar");
// array.push("nima");
// console.log(array);

//* Pop an array
//? Pop Methods bizga arrayda ohirgi elementni o'chrib tashalash uchun ishlatilinadi
// const array = ["hello", "world"];
// array.pop();
// console.log(array);

//*shift an array
//? Shift Methods bizga arrayda boshdagi elementni olib tashlash uchun ishlatilinadi
// const array = ["hello", "world"];
// array.shift();
// console.log(array);

//* Unshift an array
//? Unshift methods bizga arrayda boshidan malumot qoshish uchun ishlatiliandi
// const array = ["hello", "world"];
// array.unshift("whats up");
// console.log(array);

//* splice an array
//? Splice Methods bizga array da splice( 1 indexda turganni anglatadi bu esa 1-ta element ochrishni aytadi va osha ochirgan elementni orniga yangi element qoshish mumkun) qoshish va ochrish ga yordam beradi
// const array = ["hello", "world", "world0"];
// array.splice(1, 1, "world132", "world2");
// console.log(array);

//* slice an array
//? Slice Methods bizga array da slice bizga slice()buni ichga nichichi kiritsek masalan 2-kirtamiz 2-gacha yozilgan arrayni ochrib beradi
// const array = ["hello", "world", "world0"];
// console.log(array.slice(3));

//* concat an array
//? concat an array bizga arrayni ohirdan malumot qoshish uchun ishlatiliniadi faqat ohirdan qoshadi
// const array = ["hello", "world", "hi"];
// console.log(array.concat(0, 1, "salom nima gap"));

//* join an array
//? join an array bizga arrayni stringgta aylantrishga yordam beradi
// const array = ["hello", "world", "world"];
// console.log(array.join("  "));

//* indexOf an array
//? indexOf an array bizga arrayda biz yozgan malumot qaysi indexda turganini ko'rsatadi va faqat indexOf("hello") ichga faqat string yozishmiz kerak
// const array = ["hello", "world"];
// console.log(array.indexOf("hello"));

//* lastindexOf an array
//? lastIndexOf an array bizga arrayda biz indexOf nilan bir-xil ishlaydi
// const array = ["hi", "by", "apple", "banana"];
// console.log(array.lastIndexOf("by"));

//* filter an array
//? filter() metodining vazifasi, berilgan shartlarni qanoatlantirgan elementlardan iborat yangi bir array qaytarishdir. Bu metod asl arrayni o'zgartirmaydi, o'rniga yangi bir array qaytaradi, bu yangi array asl arrayning filtrlangan elementlaridan iborat bo'ladi.
// const array = ["hi", "bey", "bro"];
// const arr = array.filter((item) => item.includes("bro"));
// console.log(arr);
