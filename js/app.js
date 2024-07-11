/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// let keyy = [];
let Rword = [
     {name:'Ahmed', hint:'Boy Name'},
    //  {name:'Ayman', hint:'Boy Name'},
    //  {name:'Hasan', hint:'Boy Name'},
    //  {name:'Denis', hint:'Boy Name'},
    //  {name:'Baqer', hint:'Boy Name'},
    //  {name:'Salma', hint:'Girl Name'},
    //  {name:'Nawal', hint:'Girl Name'},
    //  {name:'Layla', hint:'Girl Name'},
    //  {name:'Trout', hint:'Fish Name'},
     {name:'Shark', hint:'Fish Name'},
];

/*------------------------ Cached Element References ------------------------*/
const hang = document.getElementById('hang');
const word = document.querySelector('.word');
const keyword = document.querySelector('.keyword');
const button = document.querySelectorAll('.letter');
const win = document.querySelector('.win');
const testword = document.querySelector('.testword');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

/*----------------------------- Event Listeners -----------------------------*/
let counter = 0;
let RandomW = Rword[Math.floor(Math.random()*Rword.length)];
const idx = Rword.indexOf(RandomW);

button.forEach((element) => {
    element.addEventListener('click', () => {
        const btn = element.innerText;
        // if(btn.includs(RandomW))
        keyword.textContent += btn;
    // } else if(btn != btn.includes(RandomW) && counter == 0){
    //             hang.src = "./img/gibbet-head.png";
    //             counter ++
    //     } else if(btn != btn.includes(RandomW)  && counter == 1){
    //         hang.src = "./img/gibbet-head-skelleton.png";
    //         counter ++
    //     } else if(btn != btn.includes(RandomW)  && counter == 2){
    //         hang.src = "./img/gibbet-head-skelleton-oneH.png";
    //         counter ++
    //     } else if(btn != btn.includes(RandomW)  && counter == 3){
    //         hang.src = "./img/gibbet-head-skelleton-twoH.png";
    //         counter ++
    //     } else if(btn != btn.includes(RandomW)  && counter == 4){
    //         hang.src = "./img/gibbet-head-skelleton-twoH-oneL.png";
    //         counter ++
    //     } else if(btn != btn.includes(RandomW)  && counter == 5){
    //         hang.src = "./img/gibbet-head-skelleton-twoH-twoL.png";
    //         counter ++
    //     } else if(btn != btn.includes(RandomW)  && counter == 6){
    //         win.textContent = "Status : Game Over ";
    //     }
    });
});
// console.log(keyword.textContent.toLowerCase() != keyy)
testword.addEventListener('click', () => {
    const typo = keyword.textContent;
    const idx = Rword.indexOf(RandomW);
    console.log(RandomW)
    if(typo.toLowerCase().includes(Rword[idx].name.toLowerCase())){
         win.textContent = "Status : Win ";
         keyword.textContent = '';
    } else if (!(typo.toLowerCase().includes(Rword[idx].name.toLowerCase())) && counter == 0){
         hang.src = "./img/gibbet-head.png";
         counter ++
    }  else if (!(typo.toLowerCase().includes(Rword[idx].name.toLowerCase())) && counter == 1){
         hang.src = "./img/gibbet-head-skelleton.png";
         counter ++
    }  else if (!(typo.toLowerCase().includes(Rword[idx].name.toLowerCase())) && counter == 2){
         hang.src = "./img/gibbet-head-skelleton-oneH.png";
         counter ++
    }  else if (!(typo.toLowerCase().includes(Rword[idx].name.toLowerCase())) && counter == 3){
         hang.src = "./img/gibbet-head-skelleton-twoH.png";
         counter ++
    }  else if (!(typo.toLowerCase().includes(Rword[idx].name.toLowerCase())) && counter == 4){
         hang.src = "./img/gibbet-head-skelleton-twoH-oneL.png";
         counter ++
    }  else if (!(typo.toLowerCase().includes(Rword[idx].name.toLowerCase())) && counter == 5){
        hang.src = "./img/gibbet-head-skelleton-twoH-twoL.png";
        win.textContent = "Status : Game Over ";
        keyword.textContent = '';
    }  
})

start.addEventListener('click', RandWord);

reset.addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/

function init (){
    let RandomW = Rword[Math.floor(Math.random()*Rword.length)];
    keyword.textContent = '';
    win.innerText = "Status :"
    word.textContent = `${RandomW.hint} & first letter ${RandomW.name.slice(0,1)}`;
    hang.src = './img/gibbet.png';
    counter = 0;
}

function RandWord(){
    let RandomW = Rword[Math.floor(Math.random()*Rword.length)];
    let StartSound = new Audio('./Audio/mixkit.wav')
    StartSound.play()
    word.textContent = `${RandomW.hint} & first letter ${RandomW.name.slice(0,1)}`;
    hang.src = './img/gibbet.png';
}



