var oyuncuSirasi;

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
            checkTable("X", value);

        }
        else {
            document.querySelector(`.box${value}`).innerHTML = "O";
            oyuncuSirasi++;
            checkTable("O", value);
        }

    }
    else {

    }
}

function restart(){
    document.querySelector(".tryAgain-page").style.display = "none";
    document.querySelector(".gameTable").style.opacity = "1"

    for (var i = 0; i < 9; i++) {
        document.querySelector(".gameTable").innerHTML = "";
    }
    for (var i = 0; i < 9; i++) {
        document.querySelector(".gameTable").innerHTML += `<div class="box${i + 1}" onclick="touch(${i + 1})"></div>`
    }
    
    oyuncuSirasi = 0;

}

function win(kazananOyuncu){

    // Dokunmayı engelleme
    for( var m = 1; m < 10; m++){
        if(document.querySelector(`.box${m}`).innerHTML == ""){
            document.querySelector(`.box${m}`).innerHTML = " ";
        }
    }

    document.querySelector(".tryAgain-page").style.display = "flex";
    document.querySelector(".gameTable").style.opacity = "0.1"

    document.querySelector(".tryAgain-page").innerHTML = 
    `<p style="font-size: 8rem; margin: -1rem 0 -2rem 0;">${kazananOyuncu}</p>
    <p>Won!</p>
    <button onclick="restart()"><i class="fa-solid fa-rotate-right"></i></button>` 
}

var k;

function checkTable(hamle, value) {
    k = value;
    console.log("bakılan hamle: " + hamle)
    console.log(k)
    if (document.querySelector(`.box${k}`).innerHTML.toString() == hamle) {
        console.log(k);
        switch (k) {
            case 1: {
                if (
                    ((document.querySelector(`.box${k + 1}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 2}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k + 3}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 6}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k + 4}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 8}`).innerHTML.toString() == hamle)) 
                ) {
                    win(hamle);
                }
                break;
            }
            case 2: {
                if (
                    ((document.querySelector(`.box${k - 1}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 1}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k + 3}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 6}`).innerHTML.toString() == hamle))
                ) {
                    win(hamle);
                }
                break;
            }
            case 3: {
                if (
                    ((document.querySelector(`.box${k - 2}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 1}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k + 3}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 6}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k + 2}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 4}`).innerHTML.toString() == hamle)) 
                ) {
                    win(hamle);
                }
                break;
            }
            case 4: {
                if (
                    ((document.querySelector(`.box${k + 1}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 2}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 3}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 3}`).innerHTML.toString() == hamle))
                ) {
                    win(hamle);
                }
                break;
            }
            case 5: {
                if (
                    ((document.querySelector(`.box${k - 1}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 1}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 3}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 3}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 4}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 4}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 2}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 2}`).innerHTML.toString() == hamle))
                ) {
                    win(hamle);
                }
                break;
            }
            case 6: {
                if (
                    ((document.querySelector(`.box${k - 2}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 1}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 3}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 3}`).innerHTML.toString() == hamle))
                ) {
                    win(hamle);
                }
                break;
            }
            case 7: {
                if (
                    ((document.querySelector(`.box${k + 1}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 2}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 6}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 3}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 4}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 2}`).innerHTML.toString() == hamle)) 
                ) {
                    win(hamle);
                }
                break;
            }
            case 8: {
                if (
                    ((document.querySelector(`.box${k - 1}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k + 1}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 6}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 3}`).innerHTML.toString() == hamle))
                ) {
                    win(hamle);
                }
                break;
            }
            case 9: {
                if (
                    ((document.querySelector(`.box${k - 2}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 1}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 6}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 3}`).innerHTML.toString() == hamle)) ||
                    ((document.querySelector(`.box${k - 8}`).innerHTML.toString() == hamle) && (document.querySelector(`.box${k - 4}`).innerHTML.toString() == hamle)) 
                ) {
                    win(hamle);
                }
                break;
            }
        }
    }
}

