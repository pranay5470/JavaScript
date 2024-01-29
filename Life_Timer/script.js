let isToggleDOB =false;
let dateOfBirth;
const setGearEl = document.getElementById("setGear")
const settingContentEl = document.getElementById("settingContent")
const intialText = document.getElementById("intialText")
const afterDOBbtn = document.getElementById("afterDOBbtn")
const dobBtn = document.getElementById("dobBtn")
const dobInput = document.getElementById("dobInput")

const yearEl = document.getElementById("year")
const monthEl = document.getElementById("month")
const dayEl= document.getElementById("day")
const hourEl = document.getElementById("hour")
const minEl= document.getElementById("min")
const secEl= document.getElementById("sec")

console.log(localStorage.getItem("year"))

const maketwoDigitNumber = (number)=>{
    return number>9 ? number:`0${number}`
}

const updateAge = ()=>{
    const currentDate = new Date()
    const dateDiff = currentDate-dateOfBirth;
    const years = Math.floor(dateDiff/(1000*60*60*24*365))
    const months = Math.floor(dateDiff/(1000*60*60*24*365))%12;
    const day = Math.floor(dateDiff/(1000*60*60*24))%30;
    const hour = Math.floor(dateDiff/(1000*60*60))%24;
    const minute = Math.floor(dateDiff/(1000*60))%60;
    const second = Math.floor(dateDiff/1000)%60;

    yearEl.innerHTML = maketwoDigitNumber(years);
    monthEl.innerHTML = maketwoDigitNumber(months);
    dayEl.innerHTML = maketwoDigitNumber(day);
    hourEl.innerHTML = maketwoDigitNumber(hour);
    minEl.innerHTML = maketwoDigitNumber(minute);
    secEl.innerHTML = maketwoDigitNumber(second);
}

const toggleDateOfBirthSelector = ()=>{
    if(isToggleDOB){
        settingContentEl.classList.add("hide");
    }else{
        settingContentEl.classList.remove("hide");
    }
    isToggleDOB = !isToggleDOB
};

const localStorageGetter = ()=>{
    const year = localStorage.getItem("year")
    const month = localStorage.getItem("month")
    const date = localStorage.getItem("date")
    if(year && month && date){
        dateOfBirth = new Date(year,month,date)
    }
    updateAge();
}

const contentToggler = ()=>{
    updateAge();
    if(dateOfBirth){
        intialText.classList.add("hide")
        afterDOBbtn.classList.remove("hide")
        // setInterval(() =>updateAge(), 1000);
    }else{
        afterDOBbtn.classList.add("hide")
        intialText.classList.remove("hide")
    }
}

const setDOBHandler = ()=>{
    const dateString = dobInput.value;
    dateOfBirth = dateString ? new Date(dateString) : null;
    console.log({dateOfBirth})
    if(dateOfBirth){
        localStorage.setItem("year", dateOfBirth.getFullYear())
        localStorage.setItem("month", dateOfBirth.getMonth())
        localStorage.setItem("date", dateOfBirth.getDay())
    }
    setInterval(() =>updateAge(), 1000);
    contentToggler();
}

localStorageGetter();
contentToggler();

setGearEl.addEventListener("click" , toggleDateOfBirthSelector);
dobBtn.addEventListener("click" , setDOBHandler );
