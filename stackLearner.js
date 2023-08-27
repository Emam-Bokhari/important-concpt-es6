// Arrow Function 01
/*const sum = (x,y) => {
    return x+y
}

// Arrow Function 02
const sum = (x,y) => x+y

// Arrow Function 03
const show = () => console.log('Hellow World')
show()

// Arrow Function 04
const showNumber = x => console.log(x)
showNumber(12)

// Arrow Function 05
const muliplyThenAddition = (x,y,z) => {
    const multiplication = x * y * z
    const sum = multiplication + x + y + z
    return sum
}
console.log(muliplyThenAddition(2,4,5))



// Default Parameters
const sum = (x = 0, y = 0) => x + y
console.log(sum(10, 5))




// forEach Array methods 01
const numberOfArray = [1,2,3,5,7]
const number = (x) => console.log(x)
numberOfArray.forEach(number)

// forEach Array methods 02
const fruits =['Mango','Banana','Jackfruit']
fruits.forEach(item=>console.log(item))


// forEach Array methods 03
const numbers = [1,2,3]
let add = 0
numbers.forEach(item=>{
    add+=item
})
console.log(add)

// forEach Array methods 04 
const fruits =['mango', 'bango', 'chingo', 'tango']
fruits.forEach((item,index,mainArray)=>{
    console.log(item,index,mainArray)
})


// map Array methods
const numbers = [1,2,3,4]
const multiply = numbers.map(item=>item*item)
console.log(multiply)



// find array methods 01
const fruits=['mango','jackfruit','banana']
const findFruits = fruits.find(item=>item==='mango')
console.log(findFruits)


// Practice task 01

// const numbers = [1,2,3,4,5,6,7]
// const evenNumbers = number =>{
//     const result =[]
//     for(let item of number){
//         if(item%2===0){
//             result.push(item)
//         }
//     }
//     return result
// }
// const even= evenNumbers(numbers)
// console.log(even)



// filter method of array
const numbers = [1,2,3,4,5,6,8]
const evenNumbers = numbers.filter(item=>item%2===0)
console.log(evenNumbers) 



// reduce method of array 01
const numbers = [1,2,4,5,6]
const sum = numbers.reduce((previous,current)=>previous+current,0)
console.log(sum)


// reduce method of array 02
const numbers = [1, 2, 4, 5, 6]
const multiply = numbers.reduce((previous, current) => previous * current)
console.log(multiply)


// reduce method of array 03
const numbers = [1, 2, 4, 5, 6]
const initialValue = 12
const sum = numbers.reduce((previous,current)=>previous+current,initialValue)
console.log(sum)



// Templating string 01
const name = 'Emam Bokhari'
const age = 23
const address = 'Brahmanbaria'
console.log(`My Name is ${name}. My age ${age}. My address ${address}`)


// templating string 02 (use map)
const name = 'Emam Bokhari'
const age = 23
const address = 'Brahmanbaria'
const subjects = ['Bangla','English','Math']
console.log(`My Name is ${name}. My age ${age}. My address ${address}.
My subjects ${subjects.map(subject=>subject).join(' ')}`)



// Ternary operator
const x = 29
x > 30 ? console.log('x is greate than 30') : console.log('30 is greater than x')



// Array spread 01
const fruits=['mango','banana','apple']
const fruits1=[...fruits]
fruits.push('jackfruits')
fruits1.push('pinapple')
console.log(fruits)
console.log(fruits1)



// Array destructureing 01
const numbers =[1,2,3,4,5,6,7,8]
const [a,b,c,d,...allNumbers]=numbers
console.log(a,b,c,d,allNumbers)



// Object spreading 01
const person={
    name:'emam',
    age:23
}
const person1={...person}
person.address='Brahmanbaria'
console.log(person)
console.log(person1)



// Object destructureing 01
const person = { name: 'emam', age: 23, address: 'brahmanbaria' }
const { name,...rest} = person
console.log(name,rest)



// Object access 01
const person = { name: 'emam', age: 23, address: 'brahmanbaria' }
console.log(person.name)
const boiush='age'
console.log(person[boiush])
console.log(person['age'])


// Object access 02
  const friends = [
    {
      name: "Alice",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Othercity",
        country: "USA"
      },
      hobbies: ["Painting", "Hiking"],
      isStudent: true
    },
    {
      name: "Bob",
      age: 32,
      address: {
        street: "789 Oak St",
        city: "Anothercity",
        country: "USA"
      },
      hobbies: ["Cooking", "Photography",'playing','reading-writing'],
      isStudent: false
    }
  ];
  console.log(friends[1]['hobbies'][friends[1].hobbies.length -1])



  
// Optional chaining 01
const friends = 
    {
      name: "Alice",
      age: 28,
      hobbies: ["Painting", "Hiking"],
      isStudent: true,
    }
    console.log(friends?.address?.phone?.street)
    */ 
