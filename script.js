//generate a random color 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeDivColor(color) {
    document.getElementById('color').style.backgroundColor = color;
}

function getArrayWith3RandomColors() {
    var colors = [];
    for (var i = 0; i < 3; i++) {
        colors.push(getRandomColor());
    }

    let randomIndex = Math.floor(Math.random() * 3);
    colors.push(randomIndex);
    return colors;
}

function addTextToButtons(arr) {
    const buttons = [...document.getElementsByTagName('button')]

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = arr[i];
    }
}

function HandleClick(event) {

    const responseText = document.getElementById('message');
    responseText.classList.remove('fadeOut')

    if (event.innerText === CorrectColor) {
        responseText.style.opacity = 1;
        responseText.innerText = 'Correct!';
        responseText.style.color = '#69ba94';
        CreateInitialParamenters();
    }
    else {
        responseText.style.opacity = 1;
        responseText.innerText = 'Wrong!';
        responseText.style.color = '#ba6a8f';
    }

    responseText.classList.add('fadeOut')
    setTimeout(() => {
        responseText.style.opacity = 0;
        responseText.classList.remove('fadeOut')
    }
        , 800);

}

function CreateInitialParamenters() {
    allColors = getArrayWith3RandomColors();
    CorrectColor = allColors[allColors[3]];

    changeDivColor(CorrectColor);
    addTextToButtons(allColors);
}

let allColors = [];
let CorrectColor = "";

CreateInitialParamenters();


