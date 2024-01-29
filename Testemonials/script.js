// const testimonialObj = [
//     {
//         authr:{
//             name:'Rohit Shrama',
//             image:'author-01.jpg',
//         },
//         text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam qui veniam pariatur cupiditate magni libero quae nulla quaerat repellat eveniet, illo culpa quod. Est dicta fugiat iure nulla quibusdam?',
//         date:'23rd May',
//     },
//     {
//         authr:{
//             name:'Virat Kohli',
//             image:'author-02.jpg',
//         },
//         text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam qui veniam pariatur cupiditate magni libero quae nulla quaerat repellat eveniet, illo culpa quod. Est dicta fugiat iure nulla quibusdam?',
//         date:'20th June',
//     },
//     {
//         authr:{
//             name:'Shital Jadhav',
//             image:'author-03.jpg',
//         },
//         text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam qui veniam pariatur cupiditate magni libero quae nulla quaerat repellat eveniet, illo culpa quod. Est dicta fugiat iure nulla quibusdam?',
//         date:'04th Nov',
//     },
//     {
//         authr:{
//             name:'Jyoti Chavan',
//             image:'author-04.jpg',
//         },
//         text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam qui veniam pariatur cupiditate magni libero quae nulla quaerat repellat eveniet, illo culpa quod. Est dicta fugiat iure nulla quibusdam?',
//         date:'01st Jan',
//     }
// ];

// let currentELe = 0;

// const conatinerElement = document.getElementById('testimonial-container');

// const nextBtn = ()=>{
//     if(currentELe<testimonialObj.length - 1){
//         currentELe +=1
//         updatePage()
//     }
// }

// const prevBtn = ()=>{
//     if(currentELe > 0){
//         currentELe -=1
//         updatePage()
//     }
// }


// const makeTestemonialCard = eachElemnt =>{
//     return`
//     <div class = "testimonial-card">
//         <img src="${eachElemnt.authr.image}">
//         <h2>${eachElemnt.authr.name}</h2>
//         <p>${eachElemnt.text}</p>
//         <date>Written on ${eachElemnt.date}</date>
//     </div>
//     `
// }

// const updatePage = () =>{
//     let markup = makeTestemonialCard(testimonialObj[currentELe])
    
//     if(testimonialObj.length > 1){
//         markup += `
//         <nav>
//             <button onclick = "prevBtn()">Previous</button>
//             <button onclick = "nextBtn()">Next</button>
//         </nav>
//         `
//     }
//     conatinerElement.innerHTML = markup
// }

// updatePage();
// let key = "email"
// const obj1 = {
//     name:"Ram",
//     age:22,
//     hobbies:["singing","reading","coding"]
// }
// console.log(obj1);

// obj1.gende = "male"
// console.log(obj1)
// console.log(obj1.age)
// console.log(obj1["age"])
// obj1[key] = "abc@gmail.com";
// console.log(obj1);

// for(let key in obj1){
//     console.log(`${key}:${obj1[key]}`);
// }

// const key1 = "objkey1"
// const key2 = "objkey2"

// const value1 = "myvalue1"
// const value2 = "myvalue2"

// const obj = {
//     [key1]:value1,
//     [key2]:value2
// }
// const obj1 ={}
// obj1[key1] = value1;
// obj1[key2] = value2;
// console.log(obj);
// console.log(obj1);

// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// }
// const obj2 = {
//     key3:"value3",
//     key4:"value4"
// }
// const objAll = {...color="red"};
// console.log("one",objAll)

// const band = [
//     {
//         id:1,
//         name:"naad",
//         song:"jay jay",
//         singer:"ram",
//         year:1999,
//     },
//     {
//         id:2,
//         name:"Dhol",
//         song:"jay jay",
//         singer:"ram",
//         year:1999,
//     },
//     {
//         id:3,
//         name:"Dhol",
//         song:"jay jay",
//         singer:"ram",
//         year:2000,
//     },
// ]
// let [{name}, ,{year}] = band
// console.log(name)
// console.log(year)
// let [val1,val2,...val3] = band
// console.log(val1);
// console.log(val2);
// console.log(val3);

// console.log(band);


// const person = {
//     id:1,
//     name:"naad",
//     song:"jay jay",
//     singer:"ram",
//     year:1999,
// }
// const{name,song,...sing} = person
// console.log(name)
// console.log(song);
// console.log(sing)

// function sum(no1,no2){
//     return no1+no2
// }
// let value = sum(2,4)
// console.log(value);

// const myArr = [1,2,3,5,9]
// let target = 10;
// function getTarget(myArr,target){
//     for(let i=0;i<myArr.length;i++){
//         if(myArr[i] === target){
//             console.log(`target :${target} and indexNo is ${i}`)
//             // return i
//         }
//     }return -1
// }
// let val = getTarget(myArr,target)
// console.log("Index is : ",val)


//function expression

// const sumThreeNo = function(no1,no2,no3){
//     console.log(no1+no2+no3)
// }
// sumThreeNo(2,2,2)

// const newVal = function(){
//     console.log("Hello")
// }
// newVal();

// function value(){
//     let value = "hello"
//     function display(){
//         console.log(value);
//     }
//     display();
// }
// value();


// myArr = [4,5,6,3]

// myArr.forEach((number,index) => {
//     console.log(`Index is ${index} and the value is ${number*2}`)
// });

// const myObj = [

//     {
//         id:1,
//         name:"Ram",
//         isLoggedIn:true,
//         gender:"Male"
//     },
//     {
//         id:2,
//         name:"Sham",
//         isLoggedIn:true,
//         gender:"Male"
//     },
//     {
//         id:3,
//         name:"Dhani",
//         isLoggedIn:true,
//         gender:"Female"
//     },
// ]
// const val = myObj.map((person)=>{
//     return person.name
// })

// myObj.forEach((myObj)=>{
//     console.log(myObj.name);
// })


// const sum = myArr.reduce((accu, curr)=>{
//     return accu+curr;
// })


// const cardDetail = [
//     {
//         id:1,
//         name:"T-shirt",
//         price:2000,
//     },
//     {
//         id:2,
//         name:"Shirt",
//         price:6999,
//     },
//     {
//         id:3,
//         name:"Jeans",
//         price:3000,
//     }
    
// ]

// myArr = [4,5,6,3]

// const ans = myArr.sort()
// console.log(ans) wrong array

// const val = myArr.sort((a,b)=>{
//     return a-b
// })
// console.log(val) for acessending order
// const totalAmount = cardDetail.reduce((totalAmt,product)=>{
//     return totalAmt + product.price
// },0)

// console.log("total Amount is: ",totalAmount);

// const myval = cardDetail.find((details)=>{
//     return details.id === 2
// })
// console.log(myval);


// const myItem = ["item1","item2","item3"]
// const addItem = ["add1","add2","add3"]

// const deleted =myItem.splice(1,2,...addItem);
// console.log(deleted)
// console.log(myItem);

// let name = "Prnay";
// for(let char of name){
//     console.log(char);
// }

function func(){
    let count = 0;
    return function(){
       
            if(count<1){
                console.log("hey you call me")
                count++;
            }else{
                console.log("Already called,Please check")
            } 
            
       
    }
    
}
const myfunc = func()
myfunc();
myfunc();


const myfunc2 = func();
myfunc2();
myfunc2();