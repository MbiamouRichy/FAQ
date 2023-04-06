const toogles = document.querySelectorAll('button')

toogles.forEach( toogle =>{
    toogle.addEventListener('click', () =>{
        toogle.parentNode.classList.toggle('active');
    })
})

