const pages = document.querySelector('.pages-count');
const days = document.querySelector('.days-count');

const btn = document.querySelector('.checkResult');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (pages.value === 0 || days.value === 0) {
        console.log('please try again');
    }
}) 