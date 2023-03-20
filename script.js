const introduceButton = document.getElementById('introduce-btn');
const studentName = document.getElementById('student-name');
const themeToggler = document.getElementById('toggle');

introduceButton.addEventListener('click', () => {
    const name = prompt('Привет! Как тебя зовут?', 'Ольга!');
    if (name) {
        studentName.textContent = name;
    }
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});