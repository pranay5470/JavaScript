// setInterval(function (){
//     console.log("Hey", Date.now())
// },2000)

//Generate random color
let intervalId;
const randomColor = function(){
    const hex = "0123456789ABCEDF"
    let color = '#'

    for(let i=0;i<6;i++){
        color += Math.floor(Math.random()*16)
    }
    return color
}

const startChangingColor = function(){

    if(!intervalId){
        intervalId = setInterval(changeBackGround,1000);
    }
   function changeBackGround(){
    document.body.style.backgroundColor = randomColor();
   }
   
};

const stopChangingColor = function(){
    clearTimeout(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
