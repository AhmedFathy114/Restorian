    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
        nav.classList.add('scroll');
        } else {
        nav.classList.remove('scroll');
        }
    });

    const right = document.getElementById('right');
    const left = document.getElementById('left');
    let count = 0;
    let counter = setInterval(() => {
            count++;
            right.innerText = count;
            if(count >=50){
                right.innerText = count;
                clearInterval(counter);
            }
    }, 60);
    let count2 = 0;
    let counter2 = setInterval(() => {
            count2++;
            left.innerText = count2;
            if(count >=15){
                left.innerText = count2;
                clearInterval(counter2);
            }
    }, 60);