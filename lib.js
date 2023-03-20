const tasksList = document.getElementById('task-list');
const congratsCat = document.getElementById('congrat');

tasksList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const parentLi = event.target.closest('li');
        parentLi.classList.add('completed');
    }

    const anythingLeft = document.querySelectorAll('#task-list li:not(.completed');
    if (!anythingLeft.length) {
        congratsCat.classList.remove('hidden')
    }  
})