const pages = document.querySelector('.pages-count');
const days = document.querySelector('.days-count');
const result = document.querySelector('result');
const error = document.querySelector('errorMessage');

function checkPagesOrDays(pages, days){
    if ((pages && pages > 0) || (days && days > 0)){
        console.log("Action Performed!");
        result.innerHTML = (`{pages*days}`);
    } else {
        console.log("Please Try Again");
        error.classList.remove();
    }
}

const btn = document.querySelector('.checkResult');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    // checkPagesOrDays(pages.value, days.value);
}) 