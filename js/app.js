/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
// let keyy = ["","","","",""];
/*------------------------ Cached Element References ------------------------*/
const word = document.querySelector('.word')
const keyword = document.querySelector('.keyword');
const button = document.querySelectorAll('button');
const win = document.querySelector('.win');
const testword = document.querySelector('.testword');

/*----------------------------- Event Listeners -----------------------------*/
// keyword.forEach((element) => {
//     element.addEventListener('click', () => {
//         for(let i=0; i< keyy.length; i++){
//             // const btn = element.innerText;
//             element.innerText = Keyy[i].textContent;
//             keyy[i].textContent = keyword.textContent;
//         }
//     })
// })
keyword.addEventListener('click', () => {
        // for(let i=0; i< keyy.length; i++){
        // element.innerText = Keyy[i].textContent;
        // keyy[i].textContent = keyword.textContent;}
})

button.forEach((element) => {
    element.addEventListener('click', () => {
        // let keyy = [];
        // for(let i=0; i< keyy.length; i++){
        //     const btn = element.innerText;
        //     btn.push(keyy[i]);
        //     keyy[i].textContent = keyword.textContent = btn;}
        const btn = element.innerText;
        keyword.textContent = btn;
    });
});

testword.addEventListener('click', () => {
    const typo = keyword.textContent;
    if(typo == word.textContent){
         win.textContent = "Status : Win ";
    } else{
         win.textContent = "Status : Game Over ";
    }
})

/*-------------------------------- Functions --------------------------------*/


