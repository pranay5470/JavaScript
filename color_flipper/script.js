const newColorBtnElement = document.getElementById("new-color-button")
const currentColorElement = document.getElementById("current-color")

const hexaValue = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function getRandomHexaValue() {
    const randomIndexPosition = Math.floor(
        Math.random() * hexaValue.length
    );
    const randomHexValue = hexaValue[randomIndexPosition];
    return randomHexValue;
}

function getRandomHexString(stringLength){
    let hexaSting = ''
    for(let i=0; i<stringLength; i++){
        hexaSting += getRandomHexaValue();
    }
    return hexaSting;
}

newColorBtnElement.addEventListener('click',()=>{
    const randomHexString = '#'+getRandomHexString(6);
    document.body.style.setProperty(
        'background-color',
        randomHexString
    )
    currentColorElement.textContent = randomHexString;
})