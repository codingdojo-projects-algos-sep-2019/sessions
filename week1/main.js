var myStr = "this is a string";

console.log(myStr);

//             0   ,   1      2 
var array = ['fish', 'cat', 'horse'];

array[array.length] = 'mouse';

array.push('dog');

console.log(array);


for (var index = 0; index < array.length; index++) {
  console.log('index is ' + index, array[index]);
}


// for (var index in array) {
//   console.log('index is ' + index, array[index]);
// }

// for (var element of array) {
//   console.log('element is ' + element);
// }


var person = ['brown', 'yellow', 5.6];

var person = {
  hair: 'yellow',
  'eyeColor': 'brown',
  height: 5.6,
  key: 'this is a key'
};

person.age = 345;

for (var key in person) {
  console.log('key is ' + key, person[key]);
}


function sayHello(name, ...rest) {
  console.log(person);

  var cat = 'this is cat';

  person.hair = 'purple';

  console.log(cat);
  console.log('hello ' + name);
}

sayHello('Jason', 21312, true, []);


console.log(person);
console.log(cat);
