/**
 * @typedef NavButton
 * @property {string} url URL
 * @property {string} title Title
 */

/** @type {NavButton[]} */
let urls = [
    {
        url: "overlay.html",
        title: "Remove annoying overlays"
    },
    {
        url: "screenshot.html",
        title: "Take screenshots of web content"
    },
    {
        url: "inspect.html",
        title: "Inspect the uninspectable"
    },
    {
        url: "contextmenu.html",
        title: "Get back the context menu"
    },
    {
        url: "redirect.html",
        title: "Avoid unwanted redirects"
    },
    {
        url: "video.html",
        title: "Get a simpler video player"
    },
    {
        url: "all-images.html",
        title: "Grab all images on the page"
    },
    {
        url: "mobile-version.html",
        title: "See the document in a mobile view"
    },
    {
        url: "modes.html",
        title: "Check the document in different modes"
    },
    {
        url: "timed-button.html",
        title: "Making timed buttons work without waiting"
    },
    // Unfinished or missing an explanation page
    {
        url: 'background-gallery.html',
        title: 'Background images'
    },
    {
        url: 'gallery.html',
        title: 'Images in the document'
    },
    {
        url: 'image-overlay.html',
        title: 'Find original images'
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
