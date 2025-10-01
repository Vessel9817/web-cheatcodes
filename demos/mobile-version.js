if (window.matchMedia('(min-width: 1000px) and (pointer: fine)').matches) {
    const gallery = /** @type {HTMLElement} */ (document.getElementById('gallery'));
    const fullimage = /** @type {HTMLElement} */ (document.getElementById('fullimage'));
    const display = /** @type {HTMLElement} */ (document.getElementById('display'));
    const images = gallery.querySelectorAll('a');

    gallery.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    for (const img of images) {
        img.addEventListener('click', function (e) {
            e.preventDefault();

            const src = this.getAttribute('href') ?? '';
            const alt = this.getAttribute('alt') ?? '';

            fullimage.setAttribute('src', src);
            fullimage.setAttribute('alt', alt);
        });
    }

    display.addEventListener('click', function (e) {
        e.preventDefault();
        fullimage.setAttribute('src', '');
    });
}
