let btnPass = document.querySelector('.password__btn'),
    inputPass = document.querySelector('.password');

btnPass.onclick = function () {
    if(inputPass.getAttribute('type') === 'password') {
        inputPass.setAttribute('type', 'text');
        btnPass.classList.add('active');
    } else {
        inputPass.setAttribute('type', 'password');
        btnPass.classList.remove('active');
    }
}