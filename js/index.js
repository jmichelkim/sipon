
console.log('Arquivo index.js carregado.');

// bind(document) é utilizado, pois o querySelector só funciona com o document.
var $ = document.querySelector.bind(document);

// console.log($);

function calculaHoras(event) {

    event.preventDefault();

    let inputHora1 = $('#hora1');
    let inputHora2 = $('#hora2');
    let inputHora3 = $('#hora3');
    let inputHora4 = $('#hora4');

    let horaAntesAlmoco = subtraiHora(inputHora2.value, inputHora1.value);
    let horaAlmoco = subtraiHora(inputHora3.value, inputHora2.value);
    let horaDepoisAlmoco = subtraiHora(inputHora4.value, inputHora3.value);
    let horaTotalSemAlmoco = somaHora(horaAntesAlmoco, horaDepoisAlmoco);
    let horaTotalComAlmoco = subtraiHora(inputHora4.value, inputHora1.value);
    // let horaIdealSaida = somaHora(horaAntesAlmoco, )

    if(horaTotalSemAlmoco == '05:45'){
        let horaSaldo = '00:00';
        console.log(`Total Saldo de Horas: 00:00`);
        document.getElementById("horaSaldo").innerHTML = horaSaldo;
    }
    if(horaTotalSemAlmoco < '05:45'){
        let horaSaldo = '- '+ subtraiHora('05:45', horaTotalSemAlmoco);
        console.log(`Total Saldo de Horas: -${horaSaldo}`); 
        document.getElementById("horaSaldo").innerHTML = horaSaldo;
    }
    if(horaTotalSemAlmoco > '05:45'){
        let horaSaldo = subtraiHora(horaTotalSemAlmoco,'05:45');      
        console.log(`Total Saldo de Horas: ${horaSaldo}`); 
        document.getElementById("horaSaldo").innerHTML = horaSaldo;
    };

    let horaCumprida = somaHora(horaAntesAlmoco, horaDepoisAlmoco);

    document.getElementById("horaAntesAlmoco").innerHTML = horaAntesAlmoco;
    document.getElementById("horaAlmoco").innerHTML = horaAlmoco;
    document.getElementById("horaDepoisAlmoco").innerHTML = horaDepoisAlmoco;
    document.getElementById("horaTotalSemAlmoco").innerHTML = horaTotalSemAlmoco;
    document.getElementById("horaTotalComAlmoco").innerHTML = horaTotalComAlmoco;
    document.getElementById("horaCumprida").innerHTML = horaCumprida;

    document.getElementById('mensagem').style.display = 'inline';

    // Modelo de como exibir a variável junto com o console.log.
    // console.log(`Total Saldo de Horas: ${horaSaldo}`); 
}