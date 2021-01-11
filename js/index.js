
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
    let horaSaidaIdeal = somaHora(inputHora1.value, '06:15');
    let horaSaidaAjustadaInicial = somaHora(inputHora1.value, '05:45');
    let horaSaidaAjustadaFinal = somaHora(horaSaidaAjustadaInicial, horaAlmoco);

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
    document.getElementById("horaSaidaIdeal").innerHTML = horaSaidaIdeal;
    document.getElementById("horaSaidaAjustadaFinal").innerHTML = horaSaidaAjustadaFinal;

    document.getElementById('mensagem').style.display = 'inline';
    
    // Modelo de como exibir a variável junto com o console.log.
    // console.log(`Total Saldo de Horas: ${horaSaldo}`); 

    setCookie(1,2,3,4);
}

function setCookie(inputHora1, inputHora2, inputHora3, inputHora4){
    var data = new Date();
    // document.cookie = "data = " + data;
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
    var x = document.cookie;
    console.log(document.cookie);
    console.log('Cookie Criado.')

}