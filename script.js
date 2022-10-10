let bg = document.getElementById('bg');
let venus = document.getElementById('venus');
let lod = document.getElementById('lod');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    venus.style.top = value * 0.5 + 'px';
    lod.style.left = value * 0.7 + 'px';
    lod.style.top = value * 0.7 + 'px';
    mountain.style.top = value * 0.15 + 'px';
    road.style.top = value * 0.2 + 'px';
    text.style.top = value * 0.8 + 'px';
})