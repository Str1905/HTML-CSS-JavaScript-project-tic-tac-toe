let container = Array.from(document.getElementsByClassName("Boxes-1"));
let turn = "X"
let audioTurn1= new Audio("gameover.mp3")
let audioTurn2 = new Audio("ting.mp3")
let winAudio = new Audio("mixkit-happy-times-158.mp3")
let numOfTimesXwins = 0;
let numOfTimes0wins = 0;
let isgameover = "false"
let IsgameDraw = "false";

// console.log(container);
// function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
// function for checking that match is draw or not

let IsGameDraw = ()=>{
    let box = Array.from(document.getElementsByClassName("boxtext"));
    // console.log(box[0].innerHTML);
    box.forEach(e=>{
        console.log(e.innerHTML)
        if(e.innerHTML==undefined){
            console.log("Game is over")
            IsgameDraw = true;
        }
    })
}


// Function to check for a win
const checkWin = () => {
    let boxtext = Array.from(document.getElementsByClassName('boxtext'))
    // console.log(boxtext[0].innerHTML)
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, -45],
    ]
    wins.forEach(e => 
        {
        // console.log(e[3])
        // console.log(document.querySelectorAll('.imgbox'));
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('#info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.getElementById("reset").innerHTML = "Replay";
            if (boxtext[e[0]].innerText == 'X') {
                numOfTimesXwins++;
                document.getElementById("ScoreContainer1").innerHTML = numOfTimesXwins;
                console.log(document.getElementById("ScoreContainer1").innerText);
                document.querySelectorAll('.imgbox')[0].getElementsByTagName('img')[0].style.width = "20vw";
            }

            else {
                numOfTimes0wins++;
                // document.get
                document.getElementById("ScoreContainer2").innerHTML = numOfTimes0wins;
                console.log(document.getElementById("ScoreContainer2").innerHTML);
                document.querySelectorAll('.imgbox')[1].getElementsByTagName('img')[0].style.width = "20vw";

            }
           
            console.log(typeof (numOfTimesXwins));
            console.log(typeof (numOfTimes0wins));
            console.log(parseInt(numOfTimesXwins));
            console.log(numOfTimes0wins);
            // document.querySelectorAll('.imgbox')[0].getElementsByTagName('img')[0].style.width = "20vw";
            // document.querySelectorAll('.imgbox')[1].getElementsByTagName('img')[0].style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
        }
        else{

        }
        if(document.getElementById("reset").innerHTML == "Replay"){
            setInterval(winAudio.play(),10000)
        }
        else{
            winAudio.pause();
        }
       
       
    })
}
container.forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (isgameover != true) {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
                turn = changeTurn();
                 if(turn=="X"){
                    audioTurn1.play();
                 }
                 else{
                    audioTurn2.play();
                 }
                
                checkWin();
               
                document.getElementById("info").innerHTML = "Turn for " + turn;
                if (!isgameover) {
                    document.getElementid("info").innerHTML = "Turn for " + turn;
                }
            }
        }
    })
}
)
// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementById("reset").innerHTML = "Reset";
    document.querySelector(".line").style.width = "0vw";
    document.getElementById("info").innerText = "Turn for " + turn;
    document.querySelectorAll('.imgbox')[0].getElementsByTagName('img')[0].style.width = "0px"
    document.querySelectorAll('.imgbox')[1].getElementsByTagName('img')[0].style.width = "0vw"
    if(document.getElementById("reset").innerHTML == "Reset"){
        winAudio.pause();
    }

})

function play(){
    winAudio.play();
}

