/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let keyy = [];
let Rword = ['Ahmed','Ayman','Hasan'];
/*------------------------ Cached Element References ------------------------*/
const word = document.querySelector('.word')
const keyword = document.querySelector('.keyword');
const button = document.querySelectorAll('.letter');
const win = document.querySelector('.win');
const testword = document.querySelector('.testword');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');

/*----------------------------- Event Listeners -----------------------------*/
// keyword.forEach((element) => {
//     element.addEventListener('click', () => {
//         for(let i=0; i< keyy.length; i++){
//             element.textContent = keyy[i];
//         }
//     })
// })
// keyword.addEventListener('click', () => {
//         // for(let i=0; i< keyy.length; i++){
//         // element.innerText = Keyy[i].textContent;
//         // keyy[i].textContent = keyword.textContent;}
// })

const RandomW = Rword[Math.floor(Math.random()*Rword.length)];
word.textContent = `${RandomW}`;

// const RandomW = '';
// start.addEventListener('click', () => {
//     RandomW = Rword[Math.floor(Math.random()*Rword.length)];
//     word.textContent = `${RandomW}`;
// })
console.log(RandomW)

button.forEach((element) => {
    element.addEventListener('click', () => {
        // for(let i=0; i< keyy.length; i++){
        const btn = element.innerText;
        keyword.textContent += btn;
        console.log(keyword.textContent.split(''))
    // }
    });
});

testword.addEventListener('click', () => {
    const typo = keyword.textContent;
    if(typo.toLowerCase() === word.innerHTML.toLowerCase()){
         win.textContent = "Status : Win ";
    } else if (typo != word.innerText){
         win.textContent = "Status : Game Over ";
    }
})

/*-------------------------------- Functions --------------------------------*/
function init (){
    keyword.textContent = '';
    win.innerText = "Status :"

}



// document.getElementById("game").style.display = "none";
// document.getElementById("pic").style.display = "none";

