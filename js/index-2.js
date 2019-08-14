
console.log('Arquivo index.js carregado. 2');

var $ = document.querySelector.bind(document); // bind(document) é utilizado, pois o querySelector só funciona com o document.


function calculaHoras(event) {

    event.preventDefault();

    let inputHora1 = $('#hora1');
    var inputHora2 = $('#hora2');
    var inputHora3 = $('#hora3');
    var inputHora4 = $('#hora4');

    console.log(inputHora1.value);
    console.log(inputHora2.value);
    console.log(inputHora3.value);
    console.log(inputHora4.value);


}