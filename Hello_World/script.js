const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span")

btnElement.addEventListener("click",()=>{
    const yourName  = prompt("Enter a your name: ")
    spanElement.textContent = yourName;
})