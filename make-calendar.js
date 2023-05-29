date_grid = document.getElementsByClassName('cal-grid')[0];

i = 0;

while(i < 28) {
    date_grid.innerHTML += '<button>'+i+'</button>';
}