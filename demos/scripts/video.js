if (window.matchMedia('(pointer: fine)').matches) {
    console.log('x');

    let but = /** @type {HTMLButtonElement} */ (
        document.querySelector('button')
    );
    let container = /** @type {HTMLElement} */ (
        document.getElementById('movie')
    );
    let video = /** @type {HTMLVideoElement} */ (
        document.querySelector('video')
    );

    video.controls = false;
    but.addEventListener('click', () => {
        container.classList.toggle('play');

        if (container.classList.contains('play')) {
            video.play();
        } else {
            video.pause();
        }
    });
}
