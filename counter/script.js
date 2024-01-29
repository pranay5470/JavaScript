const addBtnEle = document.getElementById("counterAdd");
const subBtnEle = document.getElementById("counterSub");
const counterDisplayEle =document.getElementById("counterDisplay")

let total = 10;
let limit = 20

const updateCounterDisplay = ()=>{
    if(total>limit){
        total=limit
    }

    if(total < 0){
        total=0
    }
    counterDisplayEle.textContent = total
    document.body.style.setProperty('background-color',`rgb(${(total/limit)*255},64,0)`)

}

addBtnEle.addEventListener('click',()=>{
    
    total += 1;
    updateCounterDisplay()
})

subBtnEle.addEventListener('click',()=>{
  
    total -=1;
    updateCounterDisplay()
})
updateCounterDisplay();