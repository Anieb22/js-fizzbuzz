const size = 12;
let multi5 = 'buzz';
let multi3 = 'fuzz';
let multi3_5 = 'fuzz-buzz';
let board = '';

const output = document.getElementById('output')

for(let row = 1; row <= size; row++){
    board += "<div class='board-row'>";

    if(row % 3 !==0){
        multi3 = 'red'
    }

    else if(row % 5 !==0){
        multi3 = 'yellow'
    }

    else(row % 3 !==0 && row % 5 !==0)
        multi3_5 = 'orange'

    for(let cell = 1; cell<= size; cell++){

        if(cell % 3 !== 0){
            board += '<div class"square ${multi3}"';
        }

        else if(cell % 5 !== 0){
            board += '<div class"square ${multi5}"';
        }

        else(cell % 3 !==0 && cell % 5 !==0)
            board += '<div class"square ${multi3_5}"';
    }

    board += '</div>';
    
}

output.innetHTML += board;
