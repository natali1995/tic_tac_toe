const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')
const cell4 = document.getElementById('cell4')
const cell5 = document.getElementById('cell5')
const cell6 = document.getElementById('cell6')
const cell7 = document.getElementById('cell7')
const cell8 = document.getElementById('cell8')
const cell9 = document.getElementById('cell9')


const playerX = 'X'
const player0 = '0'

let step = 0

$( ".field" ).click(function() {
    if ($(this).html() === ''){
        if (step%2 === 0) {
            $(this).html(playerX)
        } else {
            $(this).html(player0)
        }
    }
    step ++;
    Winner();
})

let table = [
    [cell1, cell2, cell3],
    [cell4, cell5, cell6],
    [cell7, cell8, cell9],
]

function Winner() {
    for(let i = 0; i < 3; i++) {
        if (table[i][0].innerHTML !== '' && table[i][0].innerHTML === table[i][1].innerHTML && table[i][0].innerHTML === table[i][2].innerHTML){
            SetWinner(table[i][0].innerHTML)
            return
        }
        if (table[0][i].innerHTML !== '' && table[0][i].innerHTML === table[1][i].innerHTML && table[0][i].innerHTML === table[2][i].innerHTML){
            SetWinner(table[0][i].innerHTML)
            return
        }
    }
    if (table[0][0].innerHTML !== '' && table[1][1].innerHTML !== '' && table[2][2].innerHTML !== '' && table[0][0].innerHTML === table[1][1].innerHTML && table[0][0].innerHTML === table[2][2].innerHTML){
        SetWinner(table[0][0].innerHTML)
        return
    }
    if (table[2][0].innerHTML !== '' && table[1][1].innerHTML !== '' && table[0][2].innerHTML !== '' && table[2][0].innerHTML === table[1][1].innerHTML && table[2][0].innerHTML === table[0][2].innerHTML){
        SetWinner(table[2][0].innerHTML)
        return
    }
    if (step === 9) {
        SetWinner('Nobody win')
    }
}

function SetWinner(player){
    setupMessageButton('Winner is', 'player ' + player)
}

