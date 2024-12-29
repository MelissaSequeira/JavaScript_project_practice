// let inpText=document.getElementById('inp-txt');
// let addBtn=document.getElementById('add-btn');
// let dispDiv= document.getElementById('disp');
// function add(){
//   addBtn.addEventListener('click',()=>{
//     // dispDiv.innerHTML=inpText.value;
//     if(inpText.value==''){
//       alert('Please enter your task');
//     }
//     else{
//       let inDiv=document.createElement('div');
//     let taskLi=document.createElement('li');
//     taskLi.textContent=inpText.value;
//     let editBtn=document.createElement('button');
//     editBtn.innerText='Edit';
//     let clearBtn=document.createElement('button');
//     clearBtn.innerText='Clear';
//     inDiv.appendChild(taskLi);
//     inDiv.appendChild(editBtn);
//     inDiv.appendChild(clearBtn);
//     dispDiv.appendChild(inDiv);
//     inpText.value='';
//     taskLi.addEventListener('click', function() {
//       if (taskLi.style.textDecoration === 'line-through') {
//         taskLi.style.textDecoration = 'none'; // remove strikethrough
//       } else {
//         taskLi.style.textDecoration = 'line-through'; // add strikethrough
//       }
//   });
//   clearBtn.addEventListener('click',()=>{
//     dispDiv.removeChild(inDiv);
//   });
//   editBtn.addEventListener('click',()=>{
//     inpText.value=taskLi.textContent;
//     addBtn.addEventListener('click',()=>{
//       taskLi.textContent=inpText;
//     })
//   })
//     }
//   });
// }
// add();

let inpText = document.getElementById('inp-txt');
let addBtn = document.getElementById('add-btn');
let dispDiv = document.getElementById('disp');
let taskToEdit = null; // Variable to store the task being edited

function add() {
  addBtn.addEventListener('click', () => {
    if (inpText.value == '') {
      alert('Please enter your task');
    } else {
      if (taskToEdit) {
        // Update the task being edited
        taskToEdit.textContent = inpText.value;
        taskToEdit = null; // Clear the taskToEdit reference after updating
        inpText.value = ''; // Clear the input field
      } else {
        // Create a new task if not in edit mode
        let inDiv = document.createElement('div');
        let taskLi = document.createElement('li');
        taskLi.textContent = inpText.value;

        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        let clearBtn = document.createElement('button');
        clearBtn.innerText = 'Clear';

        inDiv.appendChild(taskLi);
        inDiv.appendChild(editBtn);
        inDiv.appendChild(clearBtn);
        dispDiv.appendChild(inDiv);
        inpText.value = '';

        // Add strikethrough functionality on clicking the task
        taskLi.addEventListener('click', function () {
          if (taskLi.style.textDecoration === 'line-through') {
            taskLi.style.textDecoration = 'none'; // Remove strikethrough
          } else {
            taskLi.style.textDecoration = 'line-through'; // Add strikethrough
          }
        });

        // Clear the task when clicking the Clear button
        clearBtn.addEventListener('click', () => {
          dispDiv.removeChild(inDiv);
        });

        // Edit the task when clicking the Edit button
        editBtn.addEventListener('click', () => {
          inpText.value = taskLi.textContent; // Set input to task text
          taskToEdit = taskLi; // Store reference to task being edited
        });
      }
    }
  });
}

add();
