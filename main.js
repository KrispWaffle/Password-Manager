var enterInfo = document.getElementById('enterInfo')
var submit = document.getElementById('submit')
const webInput = document.getElementById("webInput");
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");


submit.addEventListener('click' ,function(){
    let website = webInput.value;
let username = userInput.value;
let password = passInput.value;
    console.log('clicked')
    console.log(website, username, password)
})


