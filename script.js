const body = document.querySelector('body');
const container = document.querySelector('.container');
const buttonAddNote = document.querySelector("#submit");
const noteContainer = document.querySelector('#notecontainer');
const textArea = document.querySelector('#note');

function addNote(e){

    if(!textArea.value) return;

/* creation of the note */
    const divNote = document.createElement('div');
    divNote.classList.add('divnote');
    noteContainer.appendChild(divNote);

/* counter des notes */
    let count = noteContainer.children.length;

/* remplissage de notre divnote */
    const numberNote = document.createElement('h4');
    const paragraphDiv = document.createElement('p');
    const buttonDetails = document.createElement('button');

    numberNote.innerText = `Note ${count}`;
    paragraphDiv.innerText = textArea.value;
    buttonDetails.innerText = 'View Detail';

    numberNote.classList.add('h4');
    paragraphDiv.classList.add('paragraph-div');
    buttonDetails.classList.add('view-detail');

    divNote.appendChild(numberNote);
    divNote.appendChild(paragraphDiv);
    divNote.appendChild(buttonDetails);


/* boutton view detail */
    function showModal(){
        const modal = document.createElement('div');
        const paragraphModal = document.createElement('p');
        const buttonClose = document.createElement('button');

        paragraphModal.innerText = paragraphDiv.innerText;
        buttonClose.innerText = 'close';
        
        modal.classList.add('modal');
        paragraphModal.classList.add('paragraph-modal')
        buttonClose.classList.add('close');
  
        
        container.appendChild(modal);
        modal.appendChild(paragraphModal);
        modal.appendChild(buttonClose);

               
        if( modal.style.opacity = '1' ){
            body.style.backgroundColor = 'rgba(0,0,0,0.3)';
            textArea.style.backgroundColor = 'rgba(0,0,0,0.3)';
            container.style.pointerEvents = 'none';
            modal.style.pointerEvents = 'auto'; 
 
        }


    buttonClose.addEventListener('click', () => {
        modal.parentNode.removeChild(modal);
        body.style.removeProperty('background-color');
        textArea.style.removeProperty('background-color');
        container.style.removeProperty('pointer-events');
    });

} //fin fonction showModal


    buttonDetails.addEventListener('click', showModal);

    textArea.value = '';
} // fin fonction addNote

buttonAddNote.addEventListener('click', addNote);
