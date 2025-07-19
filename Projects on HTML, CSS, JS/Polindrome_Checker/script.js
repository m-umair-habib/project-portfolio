function ispalindrome(str){
    const clean_str = str.toLowerCase().replace(/[^a-z0-9]/g);
    // console.log(clean_str);
    const reverse_str = clean_str.split('').reverse().join('');
    // console.log(reverse_str);
    return clean_str === reverse_str;
}

function palindromechecker(){
    const inputtext = document.getElementById('inputtext');
    const result = document.getElementById('result');

    if(ispalindrome(inputtext.value)){
        result.textContent = `"${inputtext.value}" is a Palindrome`;
    }
    else{
        result.textContent = `"${inputtext.value}" is not a Palindrome`;
    }

    result.classList.add('fadeIn');
    inputtext.value = '';
}

document.getElementById('checkbutton').addEventListener("click", palindromechecker);