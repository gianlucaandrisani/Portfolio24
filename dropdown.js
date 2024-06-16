const dropdown = document.querySelector('.dropdown');
let timeout;

dropdown.addEventListener('mouseenter', ()=> {
    clearTimeout(timeout);
    dropdown.classList.add('show');
})

dropdown.addEventListener('mouseleave', ()=> {
    timeout = setTimeout (()=> {
        dropdown.classList.remove('show');
    }, 200);
})

const options = document.querySelector('.options');
options.addEventListener('mouseenter',() => {
    clearTimeout(timeout);
});

options.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdown.classList.remove('show');
    }, 200); 
});
