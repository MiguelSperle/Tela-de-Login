let email = document.querySelector('.input-email')
let password = document.querySelector('.input-password')
let submit = document.querySelector('.input-submit')

submit.addEventListener('click', () => {
    if(email.value == ''){
        email.setCustomValidity('Coloque seu Email')
        email.style.border = '1px solid red'
        email.style.outline = '1px solid red'
    } else {
        email.setCustomValidity('')
        email.style.border = '1px solid black'
        email.style.outline = '1px solid black'
    }


    if(password.value == ''){
        password.setCustomValidity('Coloque sua Senha')
        password.style.border = '1px solid red'
        password.style.outline = '1px solid red'
    } else {
        password.setCustomValidity('')
        password.style.border = '1px solid black'
        password.style.outline = '1px solid black'
        
    }
})








