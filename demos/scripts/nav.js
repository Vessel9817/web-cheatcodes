/**
 * @typedef NavButton
 * @property {string} url URL
 * @property {string} title Title
 */

/** @type {NavButton[]} */
let urls = [
    {
        url: 'background-gallery.html',
        title: 'Bilder als Hintergrund'
    },
    {
        url: 'gallery.html',
        title: 'Bilder im Dokument'
    },
    {
        url: 'image-overlay.html',
        title: 'Originalbilder finden'
    },
    {
        url: 'video.html',
        title: 'Einfachere Videos'
    }
];

let current = document.location.href.split('/').pop();
let nav = /** @type {Element} */ (document.querySelector('nav ul'));

urls.forEach((u) => {
    let li = document.createElement('li');

    if (u.url === current) {
        li.classList.add('current');
        li.textContent = u.title;
    } else {
        let a = document.createElement('a');

        a.href = u.url;
        a.textContent = u.title;
        li.appendChild(a);
    }
    nav.appendChild(li);
});
