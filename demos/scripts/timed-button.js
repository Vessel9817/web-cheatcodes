const but = /** @type {HTMLButtonElement} */ (document.querySelector('button'));
let secs = 120;
let step = () => {
    but.innerText = `Please wait ${secs} second${secs === 1 ? '' : 's'}...`;
    secs--;

    if (secs <= 0) {
        window.clearInterval(intervalId);

        but.disabled = false;
        but.innerText = 'Click to download';
    }
};

const intervalId = window.setInterval(step, 1000);

but.addEventListener('click', (e) => {
    e.preventDefault();
    alert('You clicked the button, you win the game!');
});
