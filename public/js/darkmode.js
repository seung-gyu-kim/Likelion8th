var night = document.getElementById('night');
night.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
})

var day = document.getElementById('day');
day.addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
})