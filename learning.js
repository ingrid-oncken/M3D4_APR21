//Array Methods
// const items = [
//   { name: "Bike", price: 100 },
//   { name: "TV", price: 200 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "Phone", price: 500 },
//   { name: "Computer", price: 1000 },
//   { name: "Keyboard", price: 25 },
// ]
//Filter: takes a simple function and return an array mathing your filtered statement,
//if true goes to new array, if false it won't
// const filteredItems = items.filter((item) => {
//   return item.price <= 100
// })
// console.log(filteredItems)
//Output of clg
// [
//   ({ name: "Bike", price: 100 },
//   { name: "Album", price: 10 },
//   { name: "Book", price: 5 },
//   { name: "Keyboard", price: 25 })
// ]

//MAP: can be used intead of a for loop, it runs inside an array/object and return a key,
//a name, a property, whathever
// const itemNames = items.map((item) => {
//   return item.price
// })
// console.log(itemNames) for item.name prints ===> [("Bike", "TV", "Album", "Book", "Phone", "Computer", "Keyboard")]
// console.log(itemNames) for item.price ===> prints [100, 200,   10,  5, 500, 1000, 25]

//FIND: finds a single(the first) item in the array, also takes a single function with item as a parameter
// const foundItem = items.find((item) => {
//   return item.price === 25
// })
// console.log(foundItem);
// console.log(foundItem) for item.name === 'Books' prints ===> { name: 'Book', price: 5 }
// console.log(foundItem) for item.name === 'Album' prints ===> { name: 'Album', price: 10 }
// console.log(foundItem) for item.price === 25 prints ===> { name: 'Keyboard', price: 25 }

//FOREACH: doesn't return anything, for every single item it will apply what the function says to
//in this case the functions is just clg
// items.forEach((item) => {
//   console.log(item.price)
// })
// console.log(item.name) prints ===>
// Bike
// TV
// Album
// Book
// Phone
// Computer
// Keyboard

// console.log(item.price) prints ===>
// 100
// 200
// 10
// 5
// 500
// 1000
// 25

//SOME: will return bollean: true or false, will check for 'at least' one item

// const hasInexpensiveItems = items.some((item) => {
//   return item.price === 0
// })
// console.log(hasInexpensiveItems)  for item.price <= 100 ===> true
// console.log(hasInexpensiveItems) for (item.price === 0) ===> false

//EVERY: will return bollean: true or false, will check if 'all' items
// const hasInexpensiveItems = items.every((item) => {
//   return item.price <= 50
// })
// console.log(hasInexpensiveItems) for item.price <= 1000 prints ===> true
// console.log(hasInexpensiveItems) for item.price <= 50 will print ===> false

//REDUCE: will do an operation in the array and return a combination of the different
//operations aplied to the array, as methods tekes an item AND a property (that will be aplied to the items)
//takes also a starting point, as a parameter of the outside function (zero in this case)
// const total = items.reduce((currentTotal, item) => {
//   return item.price + currentTotal
// }, 0)
// console.log(total) //prints ===> 1840
//reduce applies a function in EVERY SINGLE ITEM on the array, the first method of
//that function is whatever the previous array was retunrning, and the second method is THE
//item in the array
// const variableName = array.reduce((firstMethod, itemOfArray) => {
//   return XXXoperationXXX
// }, startind point of firstMethod)

//INCLUDES: this does not takes a function, takes only a single item
const items = [1, 2, 3, 4, 5]

// const includesTwo = items.includes(2)
// console.log(includesTwo) //prints ===> true

// const includesTwo = items.includes(7)
// console.log(includesTwo) //prints ===> false
