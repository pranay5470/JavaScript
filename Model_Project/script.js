const openModalBtnEl = document.querySelector("#openModal")
const modalElement = document.querySelector(".modal")
const modalContentElement = modalElement.querySelector(".modal-content")

openModalBtnEl.addEventListener("click",()=>{
    modalElement.classList.add("open");
})

modalContentElement.addEventListener("click",()=>{
    modalElement.classList.remove("open");
})