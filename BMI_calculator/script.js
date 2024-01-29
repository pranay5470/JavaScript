const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')

    if(height === '' || height>0 || isNaN(height)){
        console.log("wrong number")
        results.innerHTML("hey");
    }
})

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('#bmiForm');
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const height = parseInt(document.querySelector('#height').value);
//         const weight = parseInt(document.querySelector('#weight').value);
//         const result = document.querySelector('#result');

//         if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
//             result.innerHTML = "Please enter valid height and weight";
//         } else {
//             const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
//             result.innerHTML = `Your BMI is: ${bmi}`;
//         }
//     });
// });