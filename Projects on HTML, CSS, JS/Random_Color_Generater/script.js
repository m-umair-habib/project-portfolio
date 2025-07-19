const containerE1 = document.querySelector(".container");

for(let index = 0; index < 50; index++){
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color_container");

    const colorCodeE1 = document.createElement("Span");
    colorCodeE1.classList.add("color_code");
    colorContainerE1.appendChild(colorCodeE1);
    
    const copybuttonE1 = document.createElement("button");
    copybuttonE1.innerText = "Copy";
    colorContainerE1.appendChild(copybuttonE1);

    containerE1.appendChild(colorContainerE1);

    // console.log(containerE1);
}

function randomColor(){
    const chars = "0123456789ABCDEF";
    const colorCodeLength = 6;
    let color_code = "";

    for(let index = 0; index < colorCodeLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        color_code += chars.substring(randomNum, randomNum + 1);
    }
    return color_code;
}

const colorContainerE1s = document.querySelectorAll(".color_container");

generateColors();

function generateColors(){
    for(let i = 0; i < colorContainerE1s.length; i++){
        const colorContainerE1 = colorContainerE1s[i];
        const newColorCode = randomColor();
        const colorCodeE1 = colorContainerE1.querySelector(".color_code");

        colorContainerE1.style.backgroundColor = "#" + newColorCode;

        colorCodeE1.innerText = "#" + newColorCode;
    }
}

colorContainerE1s.forEach((colorContainerE1)=>{
    const copybuttonE1 = colorContainerE1.querySelector("button");
    const colorCodeE1 = colorContainerE1.querySelector(".color_code");
    
    copybuttonE1.addEventListener("click", ()=>{
        const color_code = colorCodeE1.innerText;
        copytoClipBoard(color_code);
    })
});

function copytoClipBoard(text){
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert("Copied to Clipbaord : " + text);
    })
    .catch((error)=>{
        console.log("Failed to Copy to Clipboard", error);
    })
}