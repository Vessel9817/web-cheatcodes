const gallery = /** @type {HTMLElement} */ (document.getElementById('gallery'));
const imgs = [
    ['img/husky-cuddles-500px.jpg', 'Husky being cuddled'],
    ['img/socke-500px.jpg', 'Dog'],
    ['img/larry-sleeping-500px.jpg', 'Sleeping Cocker spaniel'],
    ['img/larry-ball-500px.jpg', 'Cocker Spaniel with ball'],
    ['img/husky-bed-500px.jpg', 'Husky in bed'],
    ['img/socke-looking-500px.jpg', 'Dog looking at camera'],
    ['img/larry-raincoat-500px.jpg', 'Cocker Spaniel wearing Raincoat'],
    ['img/socke-with-ball-500px.jpg', 'Dog with ball'],
];
let out = '';

imgs.forEach(([img, alt]) => {
    out += `<li class="img" style="background-image:url(${img})" alt="${alt}"></li>`;
});

gallery.innerHTML = out;
