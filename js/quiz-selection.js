document.addEventListener('DOMContentLoaded', function() {
    const widgets = [
        document.getElementById('widget-1'),
        document.getElementById('widget-2'),
        document.getElementById('widget-3'),
        document.getElementById('widget-4'),
        document.getElementById('widget-5'),
        document.getElementById('widget-6'),
        document.getElementById('widget-7'),
        document.getElementById('widget-8'),
        document.getElementById('widget-9'),
        document.getElementById('widget-10')
    ];

    let wins = 0;

    const firstWin = localStorage.getItem('firstWin') === 'true';

    if (firstWin) {
        wins = 1;
    }

    widgets.forEach(item => {
        item.classList.add('locked');
    });
    
    for (let i = 0; i < widgets.length; i++) {
        if (i <= wins) {
            widgets[i].classList.remove('locked');
        } else {
            break;
        }
    }
});