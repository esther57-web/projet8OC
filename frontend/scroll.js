const body = document.querySelector('body')
const toggleBtn = document.querySelector('.toggle-btn')

toggleBtn.addEventListener('change', () =>{
    body.classList.toggle('scrollbar')
    //theme === 'light' ? body.classList.remove('scrollbar') : body.classList.add('scrollbar') 
})

