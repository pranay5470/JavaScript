const dataArray = [
    {
        title:'Why javascript is cool?',
        detail:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque, repellendus praesentium assumenda dignissimos sapiente cupiditate quod, officiis architecto quisquam cum ut, at tenetur ipsum a voluptate eum. Iure, placeat.'
    },
    {
        title:'What is javascript?',
        detail:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque, repellendus praesentium assumenda dignissimos sapiente cupiditate quod, officiis architecto quisquam cum ut, at tenetur ipsum a voluptate eum. Iure, placeat.'
    },
    {
        title:'How can I learn javascript?',
        detail:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque, repellendus praesentium assumenda dignissimos sapiente cupiditate quod, officiis architecto quisquam cum ut, at tenetur ipsum a voluptate eum. Iure, placeat.'
    }
    
];

const makeHTML = data =>{
    return`
    <details>
        <summary>${data.title}</summary>
        <p>${data.detail}</p>
    </details>
    `
}
const faqContainer = document.getElementById('faq-container')
faqContainer.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join('')