// ## getOwnPropertyDescriptor()
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderchai: function(){
        console.log(`code fatt gya`);
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai, "price", {
    writable: false,
    enumerable: false,
    configurable: false
})
// This will not change the price because it's not writable
chai.price = 300        
console.log(chai.price);       // 250
console.log(Object.getOwnPropertyDescriptor(chai, "price"));
// { 
//     value: 250, 
//     writable: false, 
//     enumerable: false, 
//     configurable: false 
// }

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}