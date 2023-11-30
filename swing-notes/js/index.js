const BASE_URL = 'https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/';

const postNoteButton = document.querySelector('#postNotesButton');
const getNoteButton = document.querySelector('#getNotesButton');
const notesElem = document.querySelector('#notes');

async function postNote(note) {
    let response = await fetch(`${BASE_URL}/api/notes`, {
        method: "POST",
        body: JSON.stringify(note), // Gör om till ett JSON objekt
        headers: {
            'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
        }
    });
    const data = await response.json();

    console.log(data);
}

async function getNotes(username) {
    const response = await fetch(`${BASE_URL}/api/notes/${username}`);
    const data = await response.json();
    return data.notes;
}

async function deleteNote(id) {
    const response = await fetch(`${BASE_URL}/api/notes/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
}

async function updateNote(noteText, id) {
    const note = {
        note: noteText
    }

    let response = await fetch(`${BASE_URL}/api/notes/${id}`, {
        method: "PUT",
        body: JSON.stringify(note), // Gör om till ett JSON objekt
        headers: {
            'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
        }
    });
    const data = await response.json();

    console.log(data);
}

function createNoteElement(note) {
    const containerElem = document.createElement('article');
    const headingElem = document.createElement('h3');
    const textElem = document.createElement('p');
    const removeButton = document.createElement('button');
    const updateInput = document.createElement('input');
    const updateButton = document.createElement('button');

    headingElem.innerText = note.title;
    textElem.innerText = note.note;
    removeButton.innerText = 'Ta bort';
    updateButton.innerText = 'Uppdatera';

    containerElem.append(headingElem);
    containerElem.append(textElem);
    containerElem.append(removeButton);
    containerElem.append(updateInput);
    containerElem.append(updateButton);
    notesElem.append(containerElem);

    removeButton.addEventListener('click', () => {
        const noteId = note.id;
        deleteNote(noteId);
    });

    updateButton.addEventListener('click', () => {
        const noteText = updateInput.value;
        const noteId = note.id;
        containerElem.remove()
        updateNote(noteText, noteId);
    });
}

function displayNotes(notes) {
    for(const note of notes) {
        console.log(note);
        createNoteElement(note);
    }
}

getNoteButton.addEventListener('click', async () => {
    const username = document.querySelector('#username').value;

    const notes = await getNotes(username);
    displayNotes(notes);
});


postNoteButton.addEventListener('click', () => {
    const note = {
        username: document.querySelector('#usernamePost').value,
        title: document.querySelector('#title').value,
        note: document.querySelector('#note').value
      }

      postNote(note);
});

