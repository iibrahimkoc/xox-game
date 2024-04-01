var oyuncuSirasi;
var k;

function start() {
    document.querySelector(".start-page").style.display = "none";
    document.querySelector(".gameTable").style.display = "flex";

    // CREATE GAME TABLE
    for (var i = 0; i < 9; i++) {
        document.querySelector(".gameTable").innerHTML += `<div class="box${i + 1}" onclick="touch(${i + 1})"></div>`
    }

    resetValue();
}
function resetValue() {
    oyuncuSirasi = 0;
}

function touch(value) {
    if (document.querySelector(`.box${value}`).innerHTML.toString() == "") {
        if (oyuncuSirasi % 2 == 0) {
            document.querySelector(`.box${value}`).innerHTML = "X";
            oyuncuSirasi++;
            checkTable("X", oyuncuSirasi);

        }
        else {
            document.querySelector(`.box${value}`).innerHTML = "O";
            oyuncuSirasi++;
            checkTable("O", oyuncuSirasi);
        }

    }
}

function restart() {
    document.querySelector(".tryAgain-page").style.display = "none";
    document.querySelector(".gameTable").style.opacity = "1";

    for (var i = 0; i < 9; i++) {
        document.querySelector(".gameTable").innerHTML = "";
    }
    for (var i = 0; i < 9; i++) {
        document.querySelector(".gameTable").innerHTML += `<div class="box${i + 1}" onclick="touch(${i + 1})"></div>`
    }
    document.querySelector(".gameTable").innerHTML += `<div class="winStick"></div>`

    resetValue();

}

function kutuErisim(value) {
    return document.querySelector(`.box${value}`)
}
function checkTable(hamle, oyuncuSirasi) {

    if ((kutuErisim(1).innerHTML == hamle) && (kutuErisim(2).innerHTML == hamle) && (kutuErisim(3).innerHTML == hamle)) {
        win(hamle, "Kazandı", 1);
    }
    else if ((kutuErisim(4).innerHTML == hamle) && (kutuErisim(5).innerHTML == hamle) && (kutuErisim(6).innerHTML == hamle)) {
        win(hamle, "Kazandı", 2);
    }
    else if ((kutuErisim(7).innerHTML == hamle) && (kutuErisim(8).innerHTML == hamle) && (kutuErisim(9).innerHTML == hamle)) {
        win(hamle, "Kazandı", 3);
    }
    else if ((kutuErisim(1).innerHTML == hamle) && (kutuErisim(4).innerHTML == hamle) && (kutuErisim(7).innerHTML == hamle)) {
        win(hamle, "Kazandı", 4);
    }
    else if ((kutuErisim(2).innerHTML == hamle) && (kutuErisim(5).innerHTML == hamle) && (kutuErisim(8).innerHTML == hamle)) {
        win(hamle, "Kazandı", 5);
    }
    else if ((kutuErisim(3).innerHTML == hamle) && (kutuErisim(6).innerHTML == hamle) && (kutuErisim(9).innerHTML == hamle)) {
        win(hamle, "Kazandı", 6);
    }
    else if ((kutuErisim(1).innerHTML == hamle) && (kutuErisim(5).innerHTML == hamle) && (kutuErisim(9).innerHTML == hamle)) {
        win(hamle, "Kazandı", 7);
    }
    else if ((kutuErisim(3).innerHTML == hamle) && (kutuErisim(5).innerHTML == hamle) && (kutuErisim(7).innerHTML == hamle)) {
        win(hamle, "Kazandı", 8);
    }
    else if (oyuncuSirasi == 9) {
        win("X-O", "Berabere", 9);
    }
    else{

    }

}


function win(kazananOyuncu, sonucDurumu, value) {
    // Dokunmayı engelleme
    for (var m = 1; m < 10; m++) {
        if (document.querySelector(`.box${m}`).innerHTML == "") {
            document.querySelector(`.box${m}`).innerHTML = " ";
        }
    }

    switch (value) {
        case 1: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 5rem;
            top: 10rem;
            width: 50rem;
            height: 0.7rem;`
            break;
        }
        case 2: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 5rem;
            top: 30rem;
            width: 50rem;
            height: 0.7rem;`
            break;
        }
        case 3: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 5rem;
            top: 50rem;
            width: 50rem;
            height: 0.7rem;`
            break;
        }
        case 4: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 49.5rem;
            top: 5rem;
            width: 0.7rem;
            height: 50rem;`
            break;
        }
        case 5: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 29.5rem;
            top: 5rem;
            width: 0.7rem;
            height: 50rem;`
            break;
        }
        case 6: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 9.5rem;
            top: 5rem;
            width: 0.7rem;
            height: 50rem;`
            break;
        }
        case 7: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 30rem;
            top: 0rem;
            transform: rotate(135deg);
            width: 0.7rem;
            height: 60rem;`
            break;
        }
        case 8: {
            document.querySelector(".winStick").style = `
            display: flex;
            right: 29.5rem;
            top: 0rem;
            transform: rotate(45deg);
            width: 0.7rem;
            height: 60rem;`
            break;
        }
        default:{
            break;
        }
    }

    /* BEKLET 3 SN FELAN */

    document.querySelector(".tryAgain-page").style.display = "flex";
    document.querySelector(".gameTable").style.opacity = "0.1"


    document.querySelector(".tryAgain-page").innerHTML =
        `<p style="font-size: 8rem; margin: -1rem 0 -2rem 0;">${kazananOyuncu}</p>
    <p>${sonucDurumu}!</p>
    <button onclick="restart()"><i class="fa-solid fa-rotate-right"></i></button>`
}