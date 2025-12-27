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
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('readMoreButton');
    const content = document.getElementById('articleContainer');
    const originalSvg = button.querySelector('.blog-comment-left-bottom-btn-svg').outerHTML;
    if (button && content) {
        button.addEventListener('click', function() {
            content.classList.toggle('expanded');
            button.classList.toggle('expanded');

            const isExpanded = content.classList.contains('expanded');

            if (isExpanded) {
                button.innerHTML = `Back ${originalSvg}`;
            } else {
                button.innerHTML = `Read Full Blog ${originalSvg} `;
            }
        });
    }
});
const tabs = document.querySelectorAll('.section-1-content-container-link');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;


        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(c => {
            c.classList.toggle(
                'active',
                c.dataset.tabContent === target
            );
        });
    });
});