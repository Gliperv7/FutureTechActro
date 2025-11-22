let burgerBtn = document.querySelector('.burger-btn');
let burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
})
;
document.addEventListener('DOMContentLoaded', () => {

    const likeButtons = document.querySelectorAll('.tab-user-posts-button--like');


    likeButtons.forEach(likeButton => {
        const svgPath = likeButton.querySelector('svg path');

        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('active');


            if (likeButton.classList.contains('active')) {
                svgPath.setAttribute('fill', '#f50');
                svgPath.setAttribute('stroke', '#f50');
            } else {
                svgPath.removeAttribute('fill');
                svgPath.setAttribute('stroke', '#666');
            }
        });
    });
});
