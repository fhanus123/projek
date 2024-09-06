const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');
const addNoteButton = document.getElementById('add-note');
const notesGrid = document.querySelector('.notes-grid');
const archiveGrid = document.querySelector('.archive-grid');

let notes = JSON.parse(localStorage.getItem('notes')) || [];
let archivedNotes = JSON.parse(localStorage.getItem('archivedNotes')) || [];

// Fungsi untuk menampilkan tanggal dalam format yang diinginkan
function getFormattedDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString(undefined, options); 
}


// Menampilkan catatan saat halaman dimuat
displayNotes();
displayArchivedNotes();

addNoteButton.addEventListener('click', () => {
  const title = noteTitleInput.value;
  const content = noteContentInput.value;
  const date = getFormattedDate(); 

  if (title.trim() === '' || content.trim() === '') {
    alert('Mohon isi judul dan konten catatan.');
    return;
  }

  const newNote = { title, content, date };
  notes.push(newNote);

  // Simpan ke local storage
  localStorage.setItem('notes', JSON.stringify(notes));

  // Clear input fields
  noteTitleInput.value = '';
  noteContentInput.value = '';

  // Update tampilan notes
  displayNotes();
});

function displayNotes() {
  notesGrid.innerHTML = '';
  notes.forEach((note, index) => {
    const noteElement = createNoteElement(note, index, false);
    notesGrid.appendChild(noteElement);
  });
}

function displayArchivedNotes() {
  archiveGrid.innerHTML = '';
  archivedNotes.forEach((note, index) => {
    const noteElement = createNoteElement(note, index, true);
    archiveGrid.appendChild(noteElement);
  });
}

function createNoteElement(note, index, isArchived) {
  const noteElement = document.createElement('div');
  noteElement.classList.add('note-card');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note-title');
  noteTitle.textContent = note.title;

  const noteContent = document.createElement('p');
  noteContent.textContent = note.content;

  const noteDate = document.createElement('div');
  noteDate.classList.add('note-date');
  noteDate.textContent = note.date; // Menggunakan format tanggal yang sudah ditentukan

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  
  // Tombol Arsipkan / Pindahkan ke Arsip
  if (!isArchived) {
    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Arsipkan';
    archiveButton.classList.add('archive-button');
    archiveButton.addEventListener('click', () => {
      archiveNote(index);
    });
    buttonContainer.appendChild(archiveButton);
  }


  // Tombol Hapus
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Hapus';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    if(isArchived) {
      deleteArchivedNote(index);
    } else {
      deleteNote(index);
    }
  });
  buttonContainer.appendChild(deleteButton);


  noteElement.appendChild(noteTitle);
  noteElement.appendChild(noteContent);
  noteElement.appendChild(noteDate);
  noteElement.appendChild(buttonContainer); 

  return noteElement;
}


function archiveNote(index) {
  // Pindahkan catatan dari 'notes' ke 'archivedNotes'
  const archivedNote = notes.splice(index, 1)[0];
  archivedNotes.push(archivedNote);
  updateLocalStorage();
  displayNotes();
  displayArchivedNotes();
}


function deleteNote(index) {
  // Menghapus catatan dari array 'notes'
  notes.splice(index, 1);
  updateLocalStorage(); 
  displayNotes();
}

function deleteArchivedNote(index) {
  archivedNotes.splice(index, 1); 
  updateLocalStorage(); 
  displayArchivedNotes();
}

function updateLocalStorage() {
  localStorage.setItem('notes', JSON.stringify(notes));
  localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));
}