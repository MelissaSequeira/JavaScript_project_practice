
    function display() {
        let buttons = document.getElementsByClassName('but'); // Get all buttons with the class 'but'
        let inputdisp = document.getElementById('disp'); // Get the input field
    
        // Loop through the buttons and add an event listener to each one
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                inputdisp.value += this.innerText; // Append the button text (numbers or operators) to the input field
            });
        }
    }
    
    display();

function clearinp(){
    let clrbtn=document.getElementById('clear');
    let inputdisp = document.getElementById('disp');
    clrbtn.addEventListener('click',()=>{
        inputdisp.value='';
    });
}
clearinp();
// function eval(){
//     let evaBtn=document.getElementById('evaBtn');
//     let inputdisp = document.getElementById('disp');
//     evaBtn.addEventListener('click',()=>{
//         try{inputdisp.value= eval(inputdisp.value);}
// catch(error){
//     inputdisp.value='error';
// }
//     });
    
// }
// eval();
function evaluateExpression() {
    let evaBtn = document.getElementById('evaBtn');
    let inputdisp = document.getElementById('disp');
    
    evaBtn.addEventListener('click', () => {
        try {
            // Use the built-in eval() function safely by checking for valid input
            inputdisp.value = eval(inputdisp.value); // Evaluates the expression in the input field
        } catch (error) {
            inputdisp.value = 'Error'; // Show error message if something goes wrong
        }
    });
}

evaluateExpression();
