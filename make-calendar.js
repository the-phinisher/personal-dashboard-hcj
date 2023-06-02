console.log('make-calendar.js run');

function make_calendar() {
    date_grid = document.getElementById('cal-grid');

    let i = 1;

    while(i <= 31) {
        date_grid.innerHTML += '<div class="cal-day">'+i+'</div>';
        i += 1;
    }
}

make_calendar();