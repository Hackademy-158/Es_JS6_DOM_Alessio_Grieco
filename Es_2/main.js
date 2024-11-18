// TRACCIA

// Inserire nel file html due campi input ed un pulsante per generare un articolo:
// un campo per inserire un titolo
// un campo per inserire un paragrafo
// inserire nell’articolo anche la data di pubblicazione tramite questa istruzione:
// Date - JavaScript | MDN 


// let date = new Date();
// let formatDate = date.toLocaleDateString()


// Implementare la seguente funzionalità:
// al click del pulsante, dovrete creare un articolo popolato dai valori prelevati dai due campi input


// Potete prendere spunto da questa anteprima:

let btn = document.querySelector('button');
const cardContainer = document.getElementById('card-container');

// Aggiungo l'event listener al bottone "Crea Articolo"
btn.addEventListener("click", () => {
    // Ottieni il valore del titolo e del paragrafo
    let title = document.getElementById("title").value;
    let paragraph = document.getElementById("paragraph").value;

    // Verifico se è stato inserito un testo
    if (title === '' || paragraph === '') {
        alert('Per poter continuare, inserire un testo');
        return;
    }

    // Crea una nuova card
    const card = document.createElement('div');
    card.classList.add('card');

    // Crea il titolo della card
    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    // Crea il paragrafo della card
    const cardParagraph = document.createElement('p');
    cardParagraph.textContent = paragraph;

    // Crea un elemento per la data
    const data = document.createElement('p');
    let date = new Date();
    data.textContent = `Pubblicato il: ${date.toLocaleDateString()}`;
    data.style.fontStyle = 'italic'; 

    // Aggiungo il titolo, il paragrafo e la data alla card
    card.appendChild(cardTitle);
    card.appendChild(cardParagraph);
    card.appendChild(data);

    // Aggiungo la card al contenitore delle card
    cardContainer.appendChild(card);

    // Pulisci gli input
    document.getElementById("title").value = '';
    document.getElementById("paragraph").value = '';
});
