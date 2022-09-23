const itensNav = document.querySelectorAll('.navlist li a');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

function typeWriter() {
    const h1Letters= h1.innerText.split('');
    const pLetters = p.innerHTML.split('');
    h1.innerText = '';
    p.innerHTML = '';

    h1Letters.forEach((letter, i) => {
        setTimeout(() => {
            h1.innerHTML += letter;
        }, 75 * i)
    });

    setTimeout(() => {
            pLetters.forEach((l, i) => {
                setTimeout(() => {
                    p.innerHTML += l;
                }, 75 * i)
            })
    },2000)
    console.log(h1Letters)
}

typeWriter()


itensNav.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if(i === 0) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        } else if(i === 1) {
            window.scrollTo({
                behavior: "smooth",
                top: 570
            })
        } else if (i === 2) {
            window.scrollTo({
                behavior: 'smooth',
                top: 1130
            })
        } else {
            window.scrollTo({
                behavior: 'smooth',
                top: 1700
            })
        }
    })
});

