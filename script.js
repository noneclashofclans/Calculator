const input = document.getElementById('input');
let btn = document.querySelectorAll('button');

let string = ''; // ans string

let arr = Array.from(btn);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = '';
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});

//event listener for keyboard input    
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        string = eval(string);
        input.value = string;
    }
    else if (e.key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    }
    else if (e.key === 'Escape') {
        string = '';
        input.value = string;
    }
    else if (/[0-9+\-*/.]/.test(e.key)) {
        string += e.key;
        input.value = string;
    }
    else if (e.key === ' ') {
        e.preventDefault(); // Prevent space from being added to the input
    }
    else {
        // Ignore other keys
    }
    // Prevent default action for all keys
    e.preventDefault();
}
);
