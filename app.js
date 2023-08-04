const module = document.querySelector(".module");
const btnMain = document.querySelector(".main-app-btn");

const changeVis = () => {
    module.classList.toggle("off");
};

btnMain.addEventListener("click", changeVis);

//////////////////////////////////////////////////////////////

const inputs = document.querySelectorAll(".input");
const root = document.querySelector(":root");

const fontChange = () => {
    for(let i = 0; i < inputs.length; i++) {
        const fsPresent = inputs[i].dataset.fs;
        console.log(inputs[i].textContent === NaN)
        root.style.setProperty(fsPresent, `${inputs[i].textContent}px`);
    };
};

setInterval(fontChange, 10);