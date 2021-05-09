function menu(aparece) {


    if (aparece == 1) {
        document.getElementById('menu').style.display = 'inline-block'
    } else {
        document.getElementById('menu').style.display = 'none';
    }
}

function darkmode() {
    var checado = document.getElementById('darkmode');

    if (checado.checked == true) {
        body.style.backgroundColor = '#1c1c1c';
    } else {
        body.style.backgroundColor = 'white';
    }
}

function cores() {
    var cor = document.getElementById("cor").value;

    document.getElementById("body").style.backgroundColor = cor;
}

function sintomas(enviar) {
    var sint1 = 0;
    var sint2 = 0;
    var sint3 = 0;
    var sint4 = 0;
    var sint5 = 0;
    var sint6 = 0;
    var sint7 = 0;
    var sint8 = 0;
    var sint9 = 0;
    var sint10 = 0;
    var sint11 = 0;
    var sint12 = 0;
    var sint13 = 0;

    var check1 = document.getElementById("s1");
    if (check1.checked == true) {
        sint1 = 1;
    }

    var check2 = document.getElementById("s2");
    if (check2.checked == true) {
        sint2 = 1;
    }

    var check3 = document.getElementById("s3");
    if (check3.checked == true) {
        sint3 = 1;
    }

    var check4 = document.getElementById("s4");
    if (check4.checked == true) {
        sint4 = 2;
    }

    var check5 = document.getElementById("s5");
    if (check5.checked == true) {
        sint5 = 2;
    }

    var check6 = document.getElementById("s6");
    if (check6.checked == true) {
        sint6 = 2;
    }

    var check7 = document.getElementById("s7");
    if (check7.checked == true) {
        sint7 = 2;
    }

    var check8 = document.getElementById("s8");
    if (check8.checked == true) {
        sint8 = 2;
    }

    var check9 = document.getElementById("s9");
    if (check9.checked == true) {
        sint9 = 2;
    }

    var check10 = document.getElementById("s10");
    if (check10.checked == true) {
        sint10 = 2;
    }

    var check11 = document.getElementById("s11");
    if (check11.checked == true) {
        sint11 = 3;
    }

    var check12 = document.getElementById("s12");
    if (check12.checked == true) {
        sint12 = 3;
    }

    var check13 = document.getElementById("s13");
    if (check13.checked == true) {
        sint13 = 3;
    }

    var soma = sint1 + sint2 + sint3 + sint4 + sint5 + sint6 + sint7 + sint8 + sint9 + sint10 + sint11 + sint12 + sint13;

    if (enviar == 1) {
        text.style.display = "block";

        if (soma < 3) {
            result1.style.display = "inline-block";
            result2.style.display = "none";
            result3.style.display = "none";
        } else if (soma > 6) {
            result1.style.display = "none";
            result2.style.display = "none";
            result3.style.display = "inline-block";
        } else {
            result1.style.display = "none";
            result2.style.display = "inline-block";
            result3.style.display = "none";
        }
    } else {
        text.style.display = "none";
        result1.style.display = "none";
        result2.style.display = "none";
        result3.style.display = "none";
    }
}