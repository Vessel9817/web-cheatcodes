const gallery = /** @type {Element} */ (document.getElementById('gallery'));
const fullimage = /** @type {Element} */ (document.getElementById('fullimage'));
const display = /** @type {Element} */ (document.getElementById('display'));
const images = gallery.querySelectorAll('a');
let now = 0;
let nowImage = images[now];
let nowImageAlt = nowImage.getAttribute('href');

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
