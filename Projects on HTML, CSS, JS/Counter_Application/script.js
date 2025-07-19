document.getElementById("increment_button").addEventListener("click", increment_counter);

document.getElementById("decrement_button").addEventListener("click", decrement_counter);

document.getElementById("reset_button").addEventListener("click", reset_counter);

let counter_display = document.getElementById("counter_display");
let counter_value = 0;

function updated_counter_display(){
    counter_display.textContent = counter_value;
}

function increment_counter(){
    counter_value++;
    updated_counter_display();
}

function decrement_counter(){
    if(counter_value > 0){
        counter_value--;
        updated_counter_display();
    }
}

function reset_counter(){
    counter_value = 0;
    updated_counter_display();
}