/*
    notre div "notecontainer" est en diplay : flexwrap pour rentrer la largeur 
    
    j'appuie sur "add Note" (si il n'ya rien dans la note, il ne se passe rien)
      - je crée une div et je lui attribue la class "divnote" contenant : 
        - un titre en h4 : Note 1, 2, ou 3.. selon le nombre de note [à créer et append à divnote]
        - un paragraphe ou y'aura notre notre de textarea [à créer et append à divnote]
        - un bouton 'View Detail' [à créer et append à divnote ]

            ==> J'appuis sur le boutton 'View Detail' et il apparait
                - une div appele 'modal' contenant : 
                    - paragraphe avec tout mon texte en note [à créer et append à modal]
                    - un bouton close avec une class "close" disparition du modal [à créer et append à modal]
                 


La première chose à faire est de créer les classes CSS et tester un html de :
    - notecontainer
    - divnote   
    - modal
*/

const buttonAddNote = document.querySelector("#submit");
const noteContainer = document.querySelector('#notecontainer');
const textArea = document.querySelector('#note');

function addNote(e){

    if(!textArea.value) return;

/* creation of the note */
    const divNote = document.createElement('div');
    divNote.classList.add('divnote');
    noteContainer.appendChild(divNote);

/* counter --------- PROBLÈME SUR LE COMPTAGE DES PAGES */
let count = 1;

/* remplissage de notre divnote */
    const numberNote = document.createElement('h4');
    const paragraphDiv = document.createElement('p');
    const buttonDetails = document.createElement('button');

    numberNote.innerText = `Note ${count++}`;
    paragraphDiv.innerText = textArea.value;
    buttonDetails.innerText = 'View Detail';

    numberNote.classList.add('h4');
    paragraphDiv.classList.add('paragraph-div');
    buttonDetails.classList.add('view-detail');

    divNote.appendChild(numberNote);
    divNote.appendChild(paragraphDiv);
    divNote.appendChild(buttonDetails);



}

buttonAddNote.addEventListener('click', addNote);