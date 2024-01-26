//*coding paradigm => buni 3-ta etabi bor

//* 1-chisi =>procrdural programing
//! bu nima desak bu codeni etabma etab yozish degani yani codeni protsedura bilan yozish degani

//* 2-chisi =>Functional programing
//! bu nima desak bu funksiyalarga asslangan va funksiyaga bolinib ishlatish mumkun va obyektlarni ham ochib ishlatishmiz mumkun

//* 3-chisi =>OOP yani Object Oriented Programming
//! bu nima desak bu masalan biz oddiy holattda masalan biz qanaqadur shaxsni malumoti kerak obyekt kornishda agar bizga 10-ta shunaqa shaxsni malumoti kerak desa biz 10-ta obyekt ochmaymiz togrmi bizga shunaqa paytda OOP yordamga keladi unda nima qilamiz desak biz uni ozni metodi bor yani CLASS degan ayynan shu orqali biz Constructor() ichda bu obyektmiz ozida qanaqa malumotlarni oz ichga oladi shularni kirtamz va merakli joyda ishlatshmiz mumkun boladi va osha CLASSni qayerdadur biz obyrkt ochgan paytmizda yanigi ozgaruvchiga olib va osha CLASSga bergan nomni oldin New qoyib () => oshani ichdan bizga kerakli bolgan malumotlar bn toldrishmiz mumkun

//* object ochamiz
// const john = {
//     name: 'john',
//     age: 25,
// }

// const ibrohim = {
//     name: 'ibrohim',
//     age: 22,
// }

// class User {
//     constructor(name, age, work, password) {
//         this.name = name;
//         this.age = age;
//         this.work = work;
//         this.password = password;
//     }
//     info() {
//         return `${this.name} ${this.age} ${this.work} ${this.password}`
//     }
// }

// const john = new User('john doe', 25);
// console.log(john.info());

// const ibrohim = new User('ibrohim', 22, "teacher", 12345678);
// console.log(ibrohim.info());

//? examples
// const user = new Array("john doe", "teacher", "student")
// Array.prototype.getfirst
//     = function () {
//         return this[0]
//     }
// console.log(user.getfirst());
// const users = new Array("John", "alice", "Bob");

// Array.prototype.getfirst = function () {
//   return this[2];
// };

// console.log(users.getfirst());
//!database
// class Database {
//   constructor(key) {
//     this[key] = [];
//   }
// }
// const usersDB = new Database("db");
// console.log(usersDB);
// class User {
//   constructo(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// console.log(usersDB);

// ? object destructuring
//! bu object edi
// const obj = {
//   area: [20, 30, 40, 50, 60],
//   color: "red",
// };
// const { area, color } = obj;
// console.log(`${obj.area}`);

//? Array destructuring
// ! endi array bn qilsa ham bo'ladi
// const users = ["ali", "gulchapchap", "toshmat", "gayrat", "ortq", "sherbek"];

// const [, , user1] = users;

// console.log(user1);

//? object Rest operator
// const obj = {
//   area: [20, 30, 40, 50, 60],
//   color: "red",
//   qolgani: "qolgani",
// };
// const { area, ...qolgani } = obj;
// console.log(qolgani);

// ? object Spread operator
// const ob = {
//   name: "ismoil",
//   ...qolgani,
// };
// console.log(ob);
// !ARRAY Spread operator and rest operator
// const users = ["ali", "gulchapchap", "toshmat", "gayrat", "ortq", "sherbek"];
// const [user1, ...qolgani] = users;
// const qolgan = [...users];
// console.log(qolgan);
// console.log(qolgani);

// const obj = {
//   name: "gulchapchap",
//   age: 22,
//   work: "teacher",
// };
// //! shallow copy
// //* const guli = obj

// //! Deep copy
// const guli = { ...obj, name: "ali" };
// console.log(obj);
// console.log(guli);

//! database
const database = [];

class User {
  constructor(name, age, work) {
    this.name = name;
    this.age = age;
    this.work = work;
  }
  save() {
    const us = {
      id: Date.now(),
      ...this,
    };

    database.push(us);
    return us;
  }

  static findById(id) {
    return users.find((u) => u.id === id);
  }
}

function addMember() {
  const users = new User("ali", 22, "teacher");
  users.save();
}
addMember();

function render(id) {
  const userFind = User.findById(id);
  console.log(userFind);
}
