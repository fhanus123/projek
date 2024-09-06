const noteTitleInput = document.getElementById('note-title');
const noteBodyInput = document.getElementById('note-body');
const addNoteButton = document.getElementById('add-note');
const notesGrid = document.querySelector('.notes-grid');
const archiveGrid = document.querySelector('.archive-grid');

let notes = JSON.parse(localStorage.getItem('notes')) || [{
  id: 'notes-jT-jjsyz61J8XKiI',
  title: 'Welcome to Notes, Dimas!',
  body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
  createdAt: '2022-07-28T10:03:12.594Z',
  archived: false,
},
{
  id: 'notes-aB-cdefg12345',
  title: 'Meeting Agenda',
  body: 'Discuss project updates and assign tasks for the upcoming week.',
  createdAt: '2022-08-05T15:30:00.000Z',
  archived: false,
},
{
  id: 'notes-XyZ-789012345',
  title: 'Shopping List',
  body: 'Milk, eggs, bread, fruits, and vegetables.',
  createdAt: '2022-08-10T08:45:23.120Z',
  archived: false,
},
{
  id: 'notes-1a-2b3c4d5e6f',
  title: 'Personal Goals',
  body: 'Read two books per month, exercise three times a week, learn a new language.',
  createdAt: '2022-08-15T18:12:55.789Z',
  archived: false,
},
{
  id: 'notes-LMN-456789',
  title: 'Recipe: Spaghetti Bolognese',
  body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
  createdAt: '2022-08-20T12:30:40.200Z',
  archived: false,
},
{
  id: 'notes-QwErTyUiOp',
  title: 'Workout Routine',
  body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
  createdAt: '2022-08-25T09:15:17.890Z',
  archived: false,
},
{
  id: 'notes-abcdef-987654',
  title: 'Book Recommendations',
  body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
  createdAt: '2022-09-01T14:20:05.321Z',
  archived: false,
},
{
  id: 'notes-zyxwv-54321',
  title: 'Daily Reflections',
  body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
  createdAt: '2022-09-07T20:40:30.150Z',
  archived: false,
},
{
  id: 'notes-poiuyt-987654',
  title: 'Travel Bucket List',
  body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
  createdAt: '2022-09-15T11:55:44.678Z',
  archived: false,
},
{
  id: 'notes-asdfgh-123456',
  title: 'Coding Projects',
  body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
  createdAt: '2022-09-20T17:10:12.987Z',
  archived: false,
},
{
  id: 'notes-5678-abcd-efgh',
  title: 'Project Deadline',
  body: 'Complete project tasks by the deadline on October 1st.',
  createdAt: '2022-09-28T14:00:00.000Z',
  archived: false,
},
{
  id: 'notes-9876-wxyz-1234',
  title: 'Health Checkup',
  body: 'Schedule a routine health checkup with the doctor.',
  createdAt: '2022-10-05T09:30:45.600Z',
  archived: false,
},
{
  id: 'notes-qwerty-8765-4321',
  title: 'Financial Goals',
  body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
  createdAt: '2022-10-12T12:15:30.890Z',
  archived: false,
},
{
  id: 'notes-98765-54321-12345',
  title: 'Holiday Plans',
  body: 'Research and plan for the upcoming holiday destination.',
  createdAt: '2022-10-20T16:45:00.000Z',
  archived: false,
},
{
  id: 'notes-1234-abcd-5678',
  title: 'Language Learning',
  body: 'Practice Spanish vocabulary for 30 minutes every day.',
  createdAt: '2022-10-28T08:00:20.120Z',
  archived: false,
}];
let archivedNotes = JSON.parse(localStorage.getItem('archivedNotes')) || [];

const dateOption = {day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"};

displayNotes();
displayArchivedNotes();

addNoteButton.addEventListener('click', () => {
  const title = noteTitleInput.value;
  const body = noteBodyInput.value;
  const createdAt = new Date().toISOString()

  if (title.trim() === '' || body.trim() === '') {
    alert('Mohon isi judul dan konten catatan.');
    return;
  }

  const newNote = { title, body, createdAt };
  notes.push(newNote);

  localStorage.setItem('notes', JSON.stringify(notes));

  noteTitleInput.value = '';
  noteBodyInput.value = '';

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

  const noteBody = document.createElement('p');
  noteBody.textContent = note.body;

  const noteDate = document.createElement('div');
  noteDate.classList.add('note-date');
  noteDate.textContent = new Date(note.createdAt).toLocaleString(dateOption); 

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  if (!isArchived) {
    const archiveButton = document.createElement('button');
    archiveButton.textContent = 'Arsipkan';
    archiveButton.classList.add('archive-button');
    archiveButton.addEventListener('click', () => {
      archiveNote(index);
    });
    buttonContainer.appendChild(archiveButton);
  }


  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Hapus';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    if (isArchived) {
      deleteArchivedNote(index);
    } else {
      deleteNote(index);
    }
  });
  buttonContainer.appendChild(deleteButton);


  noteElement.appendChild(noteTitle);
  noteElement.appendChild(noteBody);
  noteElement.appendChild(noteDate);
  noteElement.appendChild(buttonContainer);

  return noteElement;
}


function archiveNote(index) {
  const archivedNote = notes.splice(index, 1)[0];
  archivedNotes.push(archivedNote);
  updateLocalStorage();
  displayNotes();
  displayArchivedNotes();
}


function deleteNote(index) {
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