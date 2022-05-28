const divs = document.querySelectorAll('div');
const button = document.querySelector('button')


function logText(e) {
    e.stopPropagation() // stop bubbling
    console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // false = all way down | true = all way up
    once: false
}))


button.addEventListener('click', () => {
    console.log('Clickeddd!!'), {
        once: true // ativates the event just once
    }
})