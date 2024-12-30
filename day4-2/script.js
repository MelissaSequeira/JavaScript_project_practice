// let bodyColor = document.getElementsByTagName('body')[0];
// let toggyBtn = document.getElementsByTagName('button')[0];
// function togBtn(){
//     toggyBtn.addEventListener('click',()=>{
//         if(bodyColor.style.backgroundColor=='white'){
//             bodyColor.style.backgroundColor='black';
//             toggyBtn.innerText='light';
//         }
//     });
// }
// togBtn();

let bodyColor = document.getElementsByTagName('body')[0];
let toggyBtn = document.getElementsByTagName('button')[0];
let title = document.getElementsByTagName('h1')[0];

function togBtn() {
    toggyBtn.addEventListener('click', () => {
        if (bodyColor.style.backgroundColor === 'white') {
            bodyColor.style.backgroundColor = 'black';
            toggyBtn.innerText = 'light';
            title.style.color="white";
        } else {
            bodyColor.style.backgroundColor = 'white';
            toggyBtn.innerText = 'dark';
            title.style.color="black";
        }
    });
}
togBtn();
