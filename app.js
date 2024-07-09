let boxes = document.querySelectorAll(".box")
let reset_btn = document.querySelector(".reset")

let p1 = document.querySelector("#p1name").value;

console.log(p1);

let turn = true
let winner = false

 let win_ptn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box is clicked");
        if(turn){
        box.innerHTML = "X"
        turn = false
        } else{
        box.innerHTML = "O"
        turn = true
        }
        box.disabled = true
        checkWinner(box);
    })
});

let showWinner = document.querySelector(".winner")

const checkWinner = (box)=>{
for(let pattern of win_ptn){
    let pos1val = boxes[pattern[0]].innerText
    let pos2val = boxes[pattern[1]].innerText
    let pos3val = boxes[pattern[2]].innerText
    if(pos1val!= "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("Winner is ", pos1val);
            showWinner.innerHTML = `Winner is ${pos1val}` 
            disableGame();
        } 
        else{
            // reset();
        }
    }
}
}

let reset = ()=>{
    boxes.forEach((box) => {
        box.innerText = ""
        box.disabled = false
    });
    showWinner.innerText = ""
}

reset_btn.addEventListener("click", ()=>{
    reset();
})

const disableGame = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};