const textArea = document.querySelector('.words');
const btn = document.querySelector('.btn');
const number = document.getElementById('number');
const clear = document.getElementById('clear');
const char = document.getElementById('char');


const countWords = () => {
    let words = textArea.value;
    let wordsTrim = words.replace(/\s+/g, " ").trim();
    let split = wordsTrim.split(" ");
    let numberOfWords = split.length;

    if(split[0] === ""){
        numberOfWords = 0;
    }

    let c = words.length
    ;

    number.innerHTML = numberOfWords;
    char.innerHTML = c;
}

btn.addEventListener('click', countWords);

clear.addEventListener('click', () =>{
    textArea.value = "";
    number.innerText = 0;
    char.innerText = 0;
})
// countWords();