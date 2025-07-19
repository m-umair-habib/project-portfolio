function detect_character(){
    const character_input = document.getElementById("character_input");
    const result = document.getElementById("result");

    const character = character_input.value;
        if(isASCII(character)){
            result.innerText = 'The entered character is an ASCII Character'
        }
        else{
            result.innerText = 'The entered character is an Unicode Character'
        }
}

function isASCII(character){
    return character.charCodeAt(0)<=127;
}