const label = document.querySelectorAll('.label');
const campo = document.querySelectorAll('.campo input');
let active;



    campo[0].addEventListener('input', check);
    campo[1].addEventListener('input', check);




function check() {
    
    for(i = 0; i < 2; i++) {
        if (campo[i].value !== '') {
            active = true;
            label[i].setAttribute('class', 'efecto');
        }   else {
            active = false;
            label[i].removeAttribute('class', 'efecto')
        }

    }

}



