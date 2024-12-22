let numb=document.getElementById('numb');
let sb_btn=document.getElementById('sb-btn');
let disp=document.getElementById('res-box');
let clr_btn=document.getElementById('cl-btn');
let ld_btn=document.getElementById('ld-btn');


let x=Math.floor(Math.random() * 10);
function submit(){
    sb_btn.addEventListener('click',()=>{
        if(numb.value==x){
            disp.innerText='Correct guess!';
        }
        else if(numb.value>x){
            disp.innerText='Enter smaller number';
        }
        else  if(numb.value<x){
            disp.innerText='Enter bigger number';
        }
        else if(numb.value===''){
            disp.innerText='Enter a number';
        }
       
    })
}
submit();
function clear(){
    clr_btn.addEventListener('click',()=>{
        numb.value='';
        disp.innerText='';
    })
}
clear();
function again(){
    ld_btn.addEventListener('click',()=>{
        window.location.reload();
    })
}
again();