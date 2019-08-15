
console.log('Arquivo index.js carregado.');

var $ = document.querySelector.bind(document); // bind(document) é utilizado, pois o querySelector só funciona com o document.

console.log($);


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

    document.getElementById("horaAntesAlmoco").innerHTML = horaAntesAlmoco;
    document.getElementById("horaAlmoco").innerHTML = horaAlmoco;
    document.getElementById("horaDepoisAlmoco").innerHTML = horaDepoisAlmoco;
    document.getElementById("horaTotalSemAlmoco").innerHTML = horaTotalSemAlmoco;
    document.getElementById("horaTotalComAlmoco").innerHTML = horaTotalComAlmoco;

    document.getElementById('mensagem').style.display = 'inline';

    console.log(`Antes do almoço: ${horaAntesAlmoco}`);
    console.log(`Almoço: ${horaAlmoco}`);
    console.log(`Depois do almoço: ${horaDepoisAlmoco}`);
    console.log(`Total Sem o almoço: ${horaTotalSemAlmoco}`);
    console.log(`Total com almoço: ${horaTotalComAlmoco}`); 

}


// Referência em http://www.cesar.inf.br/blog/?cat=173

// Como usar
// A função abaixo tem o objetivo de subtrair duas horas passadas para ela.
// novaHora = subtraiHora("12:00", "02:27");
// novaHora -> "09:33"


    function subtraiHora(hrA, hrB) {
            if(hrA.length != 5 || hrB.length != 5) return "00:00";
           
            temp = 0;
            nova_h = 0;
            novo_m = 0;
     
            hora1 = hrA.substr(0, 2) * 1;
            hora2 = hrB.substr(0, 2) * 1;
            minu1 = hrA.substr(3, 2) * 1;
            minu2 = hrB.substr(3, 2) * 1;
           
            temp = minu1 - minu2;
            while(temp < 0) {
                    nova_h++;
                    temp = temp + 60;
            }
            novo_m = temp.toString().length == 2 ? temp : ("0" + temp);
     
            temp = hora1 - hora2 - nova_h;
            while(temp < 0) {
                    temp = temp + 24;
            }
            nova_h = temp.toString().length == 2 ? temp : ("0" + temp);
     
            return nova_h + ':' + novo_m;
    }


function somaHora(hrA, hrB, zerarHora) {
    if (hrA.length != 5 || hrB.length != 5) return "00:00";

    temp = 0;
    nova_h = 0;
    novo_m = 0;

    hora1 = hrA.substr(0, 2) * 1;
    hora2 = hrB.substr(0, 2) * 1;
    minu1 = hrA.substr(3, 2) * 1;
    minu2 = hrB.substr(3, 2) * 1;

    temp = minu1 + minu2;
    while (temp > 59) {
        nova_h++;
        temp = temp - 60;
    }
    novo_m = temp.toString().length == 2 ? temp : ("0" + temp);

    temp = hora1 + hora2 + nova_h;
    while (temp > 23 && zerarHora) {
        temp = temp - 24;
    }
    nova_h = temp.toString().length == 2 ? temp : ("0" + temp);

    return nova_h + ':' + novo_m;
}

// como usar soma hora
// A função abaixo tem o objetivo de somar duas horas passadas para ela, com a opção de zerar a hora após as 23 horas ou seguir a diante.
// novaHora = somaHora("12:00", "02:27", false);
// novaHora -> "14:27"

// novaHora = somaHora("22:50", "05:10", true);
// novaHora -> "04:00"

// novaHora = somaHora("22:50", "05:10", false);
// novaHora -> "28:00"



function hora_atual(){
    
    let date = new Date();
    let hora = date.getHours();
    let min = date.getMinutes();

    return `${hora}:${min}`;
}

