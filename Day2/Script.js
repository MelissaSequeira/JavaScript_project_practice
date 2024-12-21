let bill=document.getElementById('bill');
let service=document.getElementById('service');
let noOfPerson=document.getElementById('noOfPerson');
let select=document.getElementById('select');
let disp=document.getElementById('disp');


function submit(){
    select.addEventListener('click',()=>{
    //     console.log(bill.value);
    // console.log(service.value);
    // console.log(noOfPerson.value);
    let billAmt=bill.value;
    let serRate=service.value;
    let pers=noOfPerson.value;

    if(billAmt==" "||pers==" " || serRate =='select'){
        disp.innerText='Please enter the inputs and Rate our Service!';
        // console.log('pleaeS') ;
    }
    else{
        let tipCal= billAmt*(serRate/100);
    let eacPay=tipCal/pers;
    // console.log(eacPay);
    disp.innerText='Tip: '+eacPay+'Rs each' ;
    }
       
})
}
submit();

// function tip(){
//     let billAmt=bill.ariaValueMax;
//     let serRate=service.value;
//     let pers=noOfPerson.value;

//     let tipCal= billAmt*(serRate/100);
//     let eacPay=tipCal/pers;
//     console.log(eacPay);
//     // disp.innerText=eacPay;

// }