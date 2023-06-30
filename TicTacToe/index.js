const cells = document.querySelectorAll(".div");
const rbtn = document.querySelector("#rbtn");
const winner = document.getElementById("winner");
let finished = false;
arr = ['', '', '', '', '', '', '', '', '']
sol = [ [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
                ];





let turn = 1;



rbtn.addEventListener('click', restart)

cells.forEach((cell, index, cellsArr) => {
    
    cell.addEventListener('click',((cell) => {
        if(arr[index] == '' && !finished){

            (turn % 2 == 1) ? arr[index] = "X": arr[index] = "O";
            (turn % 2 == 1) ?  cellsArr[index].textContent = "X": cellsArr[index].textContent = "O";
            
            console.log(arr[index])
            for(let i = 0; i < sol.length; i++){
                console.log("hi");
                if(arr[sol[i][0]] != '' && arr[sol[i][0]] == arr[sol[i][1]] && arr[sol[i][0]] == arr[sol[i][2]]){
                    winner.textContent = (turn % 2 == 1) ? "Congrats, X won the game!":'"Congrats, O won the game!"';
                    finished = true;
                    break;
                }
            }
            turn += 1;
            if(turn == 10 && !finished){
                setTimeout(restart, 2000)
                winner.textContent = "It's a Draw!!!"
            }

        }

    }))
})


function restart(){
    arr.forEach((element, index, array) => { 
        array[index] = '';
        console.log(array[index]);

    })
    cells.forEach((element, index, array) => { 
        array[index].textContent = '';

    })
    turn = 1;
    finished = false;
    winner.textContent = '';

}




