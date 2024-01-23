let foldCompletion = 0;
let valleyCompletion = 0;
let butterflyCompletion = 0;
let squashCompletion = 0;

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fold-letter')) {
        event.target.style.backgroundColor = '#ade6bb';
        event.target.style.boxShadow = '0px 4px 30px 0px #ade6bb;'
        event.target.style.transform = 'scale(1.1)';
        
        foldCompletion++;

        console.log(foldCompletion);

        if (foldCompletion === 4) {
            const foldh3 = document.getElementById('fold');
            foldh3.style.display = 'block';
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('valley-letter')) {
        event.target.style.backgroundColor = '#ade6bb';
        event.target.style.transform = 'scale(1.1)';
        
        valleyCompletion++;

        console.log(valleyCompletion);

        if (valleyCompletion === 6) {
            const valleyh3 = document.getElementById('valley');
            valleyh3.style.display = 'block';
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('butterfly-letter')) {
        event.target.style.backgroundColor = '#ade6bb';
        event.target.style.transform = 'scale(1.1)';
        
        butterflyCompletion++;

        console.log(butterflyCompletion);

        if (butterflyCompletion === 9) {
            const valleyh3 = document.getElementById('butterfly');
            valleyh3.style.display = 'block';
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('squash-letter')) {
        event.target.style.backgroundColor = '#ade6bb';
        event.target.style.transform = 'scale(1.15)';
        
        squashCompletion++;

        console.log(squashCompletion);

        if (squashCompletion === 6) {
            const valleyh3 = document.getElementById('squash');
            valleyh3.style.display = 'block';
        }
    }
});