var c1 = document.getElementsByClassName('circle')[0];
var c2 = document.getElementsByClassName('circle')[1];
var c3 = document.getElementsByClassName('circle')[2];
var c4 = document.getElementsByClassName('circle')[3];
var line = document.getElementsByClassName('line')[0];
var i = 0;
function next() {
    i++
    switch (i) {
        case 1:
            c2.classList.add('active');
            line.style.width = "33%"
            break;
        case 2:
            c3.classList.add('active');
            line.style.width = "66%"
            break;
        case 3:
            c4.classList.add('active');
            line.style.width = "100%"

    }
}
function prev() {
    if (i!=0) {
        i--
    }
    switch (i) {
        case 0:
            c2.classList.remove('active');
            line.style.width = "0"
            break;
        case 1:
            c3.classList.remove('active');
            line.style.width = "33%"
            break;
        case 2:
            c4.classList.remove('active');
            line.style.width = "66%"
            break;
    }
}





