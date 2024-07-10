/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let keyy = [];
let Rword = [
     {name:'Ahmed', hint:'Boy Name'},
    //  {name:'Ayman', hint:'Boy Name'},
    //  {name:'Hasan', hint:'Boy Name'},
    //  {name:'Denis', hint:'Boy Name'},
    //  {name:'Abbas', hint:'Boy Name'},
    //  {name:'Salma', hint:'Girl Name'},
    //  {name:'Nawal', hint:'Girl Name'},
     {name:'Layla', hint:'Girl Name'}
];

/*------------------------ Cached Element References ------------------------*/
const hang = document.getElementById('hang');
const word = document.querySelector('.word');
const keyword = document.querySelector('.keyword');
// const keywordd = document.getElementById('.keyword');
const button = document.querySelectorAll('.letter');
const win = document.querySelector('.win');
const testword = document.querySelector('.testword');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

/*----------------------------- Event Listeners -----------------------------*/
let counter = 0;


button.forEach((element) => {
    element.addEventListener('click', () => {
        const RandomW = Rword[Math.floor(Math.random()*Rword.length)];
        const idx = Rword.indexOf(RandomW);
        const btn = element.innerText;
        if(btn.includes(Rword[idx].name)){
                keyword.textContent += btn;
                // testword.addEventListener('click', () => {
                //     const typo = keyword.textContent;
                //     if(typo.toLowerCase() === Rword[idx].name.toLowerCase()){
                //          win.textContent = "Status : Win ";
                //          keyword.textContent = '';
                //     }
                // });

        } else if(btn != btn.includes(Rword[idx].name) && counter == 0){
                hang.src = "./img/gibbet-head.png";
                counter ++
        } else if(btn != btn.includes(Rword[idx].name) && counter == 1){
            hang.src = "./img/gibbet-head-skelleton.png";
            counter ++
        } else if(btn != btn.includes(Rword[idx].name) && counter == 2){
            hang.src = "./img/gibbet-head-skelleton-oneH.png";
            counter ++
        } else if(btn != btn.includes(Rword[idx].name) && counter == 3){
            hang.src = "./img/gibbet-head-skelleton-twoH.png";
            counter ++
        } else if(btn != btn.includes(Rword[idx].name) && counter == 4){
            hang.src = "./img/gibbet-head-skelleton-twoH-oneL.png";
            counter ++
        } else if(btn != btn.includes(Rword[idx].name) && counter == 5){
            hang.src = "./img/gibbet-head-skelleton-twoH-twoL.png";
            counter ++
        } else if(btn != btn.includes(Rword[idx].name) && counter == 6){
            win.textContent = "Status : Game Over ";
        }
    });
});

testword.addEventListener('click', () => {
    const typo = keyword.textContent;
    const RandomW = Rword[Math.floor(Math.random()*Rword.length)];
    const idx = Rword.indexOf(RandomW);
    if(typo.toLowerCase() === Rword[idx].name.toLowerCase()){
         win.textContent = "Status : Win ";
         keyword.textContent = '';
    } else if (typo.toLowerCase() != Rword[idx].name.toLowerCase()){
         win.textContent = "Status : Game Over ";
         keyword.textContent = '';
         hang.src = "./img/gibbet-head.png";
    } else {
        win.textContent = "Status : Play";
    }
})

start.addEventListener('click', RandWord);

reset.addEventListener('click', init);

// keywordd.addEventListener('click', () => {
//     const spliceWord = keyword.textContent.split('');
//     console.log(spliceWord)
// });

/*-------------------------------- Functions --------------------------------*/

function init (){
    keyword.textContent = '';
    win.innerText = "Status :"
    const RandomW = Rword[Math.floor(Math.random()*Rword.length)];
    word.textContent = `${RandomW.hint}`;
    hang.src = './img/gibbet.png';
    counter = 0;
}

function RandWord(){
    let StartSound = new Audio('./Audio/mixkit.wav')
    StartSound.play()
    const RandomW = Rword[Math.floor(Math.random()*Rword.length)];
    word.textContent = `${RandomW.hint}`;
    hang.src = './img/gibbet.png';
}

// function wordEntered (){
//     const spliceWord = keyword.textContent.split('');
    
//         for(let i=0; i< keyy.length; i++){
//             keyy[i] = spliceWord[i];
//             console.log(keyy[i])
//         }
// }



