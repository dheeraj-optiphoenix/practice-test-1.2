const ctaButton = document.getElementById('cta');
const modal  = document.getElementById('modal');

ctaButton.addEventListener('click', () => {
    modal.style.display = 'flex';
})

const crossIcon = document.querySelector('.cross--icon--container img');
crossIcon.addEventListener('click', () => {
    modal.style.display = 'none';
})

const getStartedButton = document.getElementsByClassName('cta-button')[0];
getStartedButton.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener('click', (event) => {
    if (event.target == modal)
        modal.style.display = 'none';
})