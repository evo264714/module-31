// * No more usage of var
//* let: let it to reassign
//* const: Do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'blue';
bird = 'red';
const message = bird + ' bird'
console.log(message);

const numbers = [12, 89, 56, 45];

//* Reassign is not allowed
// numbers = [77, 69, 23, 53];

numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'Evo',
    address: 'Dhaka'
}
// student = {name: 'Mehedi'};
student.name = 'Mehedi';

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}
console.log(number);    