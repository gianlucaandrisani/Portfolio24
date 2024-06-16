const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('mouseenter', ()=> {
    dropdown.classList.add('show');
})

dropdown.addEventListener('mouseleave', ()=> {
    dropdown.classList.remove('show');
})