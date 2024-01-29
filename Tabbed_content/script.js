const navElement = document.querySelector('nav');
const navBarLinks = document.querySelectorAll('a');
const sectionElement = document.querySelectorAll('section')

const removeActiveLinks = ()=>{
    navBarLinks.forEach(link => link.parentElement.classList.remove('active'))

}

const hideSection = ()=>{
    sectionElement.forEach(section=> section.classList.add('hidden'))
}

navBarLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        removeActiveLinks();
        hideSection();
        link.parentElement.classList.add('active');
        const sectionElement = document.querySelector(link.hash)
        sectionElement.classList.remove('hidden')
    })
})