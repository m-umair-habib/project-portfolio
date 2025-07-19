const red_slider = document.getElementById("red_slider");
const green_slider = document.getElementById("green_slider");
const blue_slider = document.getElementById("blue_slider");

const red_value_span = document.getElementById("red_value");
const green_value_span = document.getElementById("green_value");
const blue_value_span = document.getElementById("blue_value");

const color_box = document.getElementById("color_box");
const copy_button = document.getElementById("copy_button");
const input_type_RGB_value = document.getElementById("input_type");

red_slider.addEventListener('input', update_color);
green_slider.addEventListener('input', update_color);
blue_slider.addEventListener('input', update_color);
copy_button.addEventListener('click', copy_RGB_value);

function update_color(){
    const red_value = red_slider.value;
    const green_value = green_slider.value;
    const blue_value = blue_slider.value;

    const rgb_color = `rgb(${red_value}, ${green_value}, ${blue_value})`

    color_box.style.background = rgb_color;

    red_value_span.textContent = red_value;
    green_value_span.textContent = green_value;
    blue_value_span.textContent = blue_value;

    input_type_RGB_value.textContent = rgb_color;
}

update_color();

function copy_RGB_value(){
    const red_value = red_slider.value;
    const green_value = green_slider.value;
    const blue_value = blue_slider.value;

    const rgb_color = `rgb(${red_value}, ${green_value}, ${blue_value})`

    navigator.clipboard.writeText(rgb_color)
        .then(()=>{
            alert("RGB Color Value copied to clipboard:" + rgb_color);
        })
        .catch((error)=>{
            console.error("Failed to copy the RGB value:", error);
        })
}