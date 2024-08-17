const pages = document.querySelector('.pages-count');
const days = document.querySelector('.days-count');
const resultMessage = document.querySelector('.result-message'); // Element to show the result
const errorMessageElement = document.querySelector('.errorMessage');

const daysInYear = 365; // Days in a year
const averagePagesPerBook = 300; // Average pages per book, can be adjusted

function showError() {
    errorMessageElement.classList.add('show');
}

function hideError() {
    errorMessageElement.classList.remove('show');
}

function checkPagesOrDays(pages, days) {
    if ((pages && pages > 0) && (days && days > 0)) {
        console.log("Action Performed!");
        hideError();

        // Calculate pages per day
        const pagesPerDay = pages / days;

        // Calculate total pages read in a year
        const totalPagesPerYear = pagesPerDay * daysInYear;

        // Calculate how many books will be finished in a year
        const booksPerYear = totalPagesPerYear / averagePagesPerBook;

        // Display the result in the result message element
        resultMessage.textContent = `You will finish approximately ${booksPerYear.toFixed(2)} books in a year.`;
    } else {
        console.log("Please Try Again");
        showError();
    }
}

const btn = document.querySelector('.checkResult');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkPagesOrDays(pages.value, days.value);
});
