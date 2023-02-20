const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '0171111111',
    price: 4000

}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone}= fish;

// console.log(color);

const {age} = {name: 'Evo', age: 24, profession: 'student'}
// console.log(age);

const{address} = fish;
console.log(address);

//* Array distructuring
const [first, another] = [44, 99, 88, 6732];
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj']
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames(){
    return ['alim', 'halim'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba)