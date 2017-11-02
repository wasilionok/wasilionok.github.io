'use strict';


function pobierzDane() {
$(document).ready(function () {
    $('button').after("<div id='dane-programisty'></div>");
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        document.getElementById('dane-programisty').innerHTML = data.firma + "<br/>" + data.imie + "<br/>" + data.nazwisko + "<br/>" + data.zawod;
        console.log(data);
    });

});
}