const darkBtn = document.querySelector(".dark");
const defaultBtn = document.querySelector(".default");
const halloweenBtn = document.querySelector(".halloween");
const newyearBtn = document.querySelector(".newyear");


function changeTheme(theme) {
    let classes = document.body.classList
    if(document.body.classList.length) {
        document.body.classList.remove(document.body.classList);
    }
    if (theme)
    document.body.classList.add(theme);

}

darkBtn.onclick = () => changeTheme('dark-theme');

defaultBtn.onclick = () => changeTheme();

halloweenBtn.onclick = () => changeTheme('halloween-theme');

newyearBtn.onclick = () => changeTheme('newyear-theme');

function togglePopup() {
    document.querySelector('.popup-bg').classList.toggle('show');
}


const image = document.querySelector('.image');

let width = 200;

image.style.width = width + "px";

function increment() {
    width += 50;
    image.style.width = width + "px";
}

function decrement() {
    width -= 50;
    image.style.width = width + "px";
}

const borderSelect = document.querySelector('.border-width-select');
const colorSelect = document.querySelector('.color-select');

function changeBorder() {
    image.style.border = borderSelect.value + "px solid" + colorSelect.value;
}


