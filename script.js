/******************************
 * Function constructor
 */
// var hamza = {
//   name:'Hamza',
//   yearOfBirth: 1994,
//   job:'Dev'
// };

// var Person = function(name, yearOfBirth, job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.pays = 'Maroc';

// var mehdi = new Person('Mehdi', 1992, 'tech');
// var hamza = new Person('Hamza', 1994, 'Dev');
// var meryem = new Person('Meryem', 2001, 'Etudiante');
// var hajar = new Person('Hajar', 1996, 'Etudiante');

// mehdi.calculateAge();
// hamza.calculateAge();
// meryem.calculateAge();
// hajar.calculateAge();

// console.log(mehdi.pays);
// console.log(hamza.pays);


/*******************
 * Object.create
 */

//  var personProto = {
//    calculateAge: function() {
//      console.log(2019 - this.yearOfBirth);
//    }
//  };
//  var mehdi = Object.create(personProto);
//  mehdi.name = 'Mehdi';
//  mehdi.yearOfBirth = 1992;
//  mehdi.job = 'tech';

//  var hamza = Object.create(personProto, {
//   name: {value: 'Hamza'},
//   yearOfBirth: {value: 1994},
//   job: {value: 'Eco'}
//  });

/*************************
 * Primitives vs objects
 */

//  // Primitives
//   var a = 7;
//   var b = 14;
//   a = 8;
//   console.log(a);
//   console.log(b);

//  //Objects
//  var obj1 = {
//    name: 'Mehdi',
//    age: 27
//  };
//  var obj2 = obj1;
//  obj1.age = 30;
//  console.log(obj1.age);
//  console.log(obj2.age);

//  // Functions
//  var age = 25;
//  var obj = {
//    name: 'Hamza',
//    city: 'Beni Mellal'
//  };

//  function change(a, b){
//    a= 30;
//    b.city = 'San Francisco';
//  }

//  change(age, obj);
//  console.log(age);
//  console.log(obj.city);

/********************************
 * Lecture: Passing functions as arguments
 */

//  var years = [1992, 1994, 1996, 2001];

//  function arrayCalc(arr, fn){
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++){
//      arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//  }

//  function calculateAge(el) {
//    return 2019 - el;
//  }

//  function isFullAge(el) {
//    return el > 20;
//  }

//  function maxHeartRate(el) {
//    if( el >= 18 && el <= 81){
//     return Math.round(206.9 - (0.67 * el));
//    } else {
//      return -1;
//    }
//  }

//  var ages = arrayCalc(years, calculateAge);
//  var fullAge = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAge);
// console.log(rates);

/**********************************
 * Lecture: Functions returning functions
 */

//  function interviewQuestion(job) {
//    if(job === 'designer') {
//      return function(name) {
//        console.log(name + ', can you please explain what UX design is?');
//      }
//    }else if (job === 'teacher') {
//      return function(name) {
//        console.log('What a subject do you teach, ' + name + '?');
//      }
//    } else {
//      return function(name) {
//        console.log('Hello ' + name + ', what do you do?');
//      }
//    }
//  }

//  var teacherQuestion = interviewQuestion('teacher');
//  var designerQuestion = interviewQuestion('designer');

//  teacherQuestion('Mehdi');
//  designerQuestion('Hamza');
//  designerQuestion('Meryem');
//  designerQuestion('Hajar');

//  interviewQuestion('Med')('teacher');

/************************************
 * Lecture IIFE: Immediately Invoked Function Expressions
 */

//  function game () {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//  };
//  game();

//  (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// //console.log(score);

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

/****************************
 * Lecture: Closures
 */

//  function retirement(retirementAge) {
//    var a = ' years left until retirement.';
//    return function(yearOfBirth) {
//      var age = 2019 - yearOfBirth; 
//      console.log((retirementAge - age) + a);
//    }
//  };

//  var retirementUS = retirement(66);
//  var retirementGermany = retirement(65);
//  var retirementIceland = retirement(67);
 
//  //retirement(66)(1992);
 
//  retirementUS(1992);
//  retirementGermany(1992);
//  retirementIceland(1992);

// function interviewQuestion(job){
//   return function(name) {
//     if(job === 'designer') {
//       console.log(name + ', can you please explain what UX design is?');
//     }else if (job === 'teacher') {
//       console.log('What a subject do you teach, ' + name + '?');
//     } else {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   }
// }

// interviewQuestion('designer')('Hamza');
// interviewQuestion('teacher')('Mehdi');

/***********************
 * Lecture: Bind, call and apply
 */

//  var hamza = {
//    name: 'Hamza',
//    age: 25,
//    job:'teacher',
//    presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' +
//       timeOfDay + ', Ladies and gentlemen! I\' m ' + this.name +
//       ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! What\'s up? I\' m ' + this.name +
//       ', I\'m a ' + this.job + 'and I\'m ' + this.age 
//       + ' years old. Have a nice ' + timeOfDay + '.');
//     }
//    }
//  };

//  var mehdi = {
//    name: 'Mehdi',
//    age: 26, 
//    job: 'designer'
//  };

//  hamza.presentation('formal', 'morning');
//  hamza.presentation.call(mehdi, 'friendly', 'afternoon');

//  var hamzaFriendly = hamza.presentation.bind(hamza, 'friendly');
//  hamzaFriendly('morning');
//  hamzaFriendly('night');

  var years = [1992, 1994, 1996, 2001];

 function arrayCalc(arr, fn){
   var arrRes = [];
   for (var i = 0; i < arr.length; i++){
     arrRes.push(fn(arr[i]));
   }
   return arrRes;
 }

 function calculateAge(el) {
   return 2019 - el;
 }

 function isFullAge(limit, el) {
   return el > limit;
 }

 function maxHeartRate(el) {
   if( el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 * el));
   } else {
     return -1;
   }
 }

 var ages = arrayCalc(years, calculateAge);

 var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
 console.log(ages);
 console.log(fullJapan);