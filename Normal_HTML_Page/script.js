// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);
// mainHeading.style.color = "blue"
// mainHeading.style.backgroundColor = "white"

let navItems = document.getElementsByTagName("a")
// console.log(navItmes);
// console.log(navItmes.length);

// for(let i=0;i<navItmes.length;i++){
//     const navItem = navItmes[i];
//     console.log("inloop",navItem)
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "green";

// }



let nav = Array.from(navItems);

console.log(typeof nav);
console.log(Array.isArray(nav));

nav.forEach((navItem)=>{
    navItem.style.backgroundColor = "white";
    navItem.style.color="green";
})


// for(let navItem of navItems){
//     navItem.style.backgroundColor = "white";
//     navItem.style.color="green";
// }