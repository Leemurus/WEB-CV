const directory = 'images/';
const avatars = [
    'me.png',
    'me_1.jpg',
    'me_2.jpeg',
    'me_3.jpg',
];

let avatar_index = 0;
let photo = document.querySelector('.my_photo img');

photo.addEventListener("click", function () {
    avatar_index += 1;
    avatar_index %= avatars.length;
    photo.src = directory + avatars[avatar_index];
});

