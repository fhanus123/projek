const notesData = [
  {
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
  },
];


class NoteCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            .note-card {
                background-color: #2c3e50; 
                color: #ecf0f1;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                word-break: break-all;
                overflow-y: auto;
                transition: background-color 0.3s, color 0.3s; 
            }
    
            .note-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 10px;
            }
    
            .note-title {
                font-weight: bold;
                font-size: 1.2em;
                margin-bottom: 0.5em;
            }
    
            .note-date {
                font-size: 0.8em;
                color: #bdc3c7; 
            }
    
            .button-container {
                display: flex;
                justify-content: flex-end; 
                margin-top: 10px;
            }
    
            .button-container button {
                margin-left: 10px;
            }
    
            .edit-button {
                background-color: #3498db; 
                color: white;
            }
    
            .edit-button:hover {
                background-color: #2980b9; 
            }
    
            .edit-button:active {
                background-color: #21638a;
            }
    
            .delete-button {
                background-color: #e74c3c;
                color: white;
            }
    
            .delete-button:hover {
                background-color: #c0392b;
            }
    
            .delete-button:active {
                background-color: #942a21; 
            }
    
            .archive-button {
                background-color: #f39c12; 
                color: white;
            }
    
            .archive-button:hover {
                background-color: #d35400;
            }
    
            .archive-button:active {
                background-color: #a04100;
            }
        </style>
        <div class="note-card">
            <div class="note-header">
                <h3 class="note-title"></h3>
                <div class="note-date"></div>
            </div>
            <p></p>
            <div class="button-container"></div> 
        </div>`;

        this.titleElement = this.shadowRoot.querySelector('.note-title');
        this.dateElement = this.shadowRoot.querySelector('.note-date');
        this.bodyElement = this.shadowRoot.querySelector('p');
        this.buttonContainer = this.shadowRoot.querySelector('.button-container');
    }

    set note(data) { 
        this.titleElement.textContent = data.title;
        this.bodyElement.textContent = data.body;
        this.dateElement.textContent = new Date(data.createdAt).toLocaleString();
        this.createButtons(data);
    }
    createButtons(data) {
        this.buttonContainer.innerHTML = '';

        if (!data.archived) {
            const archiveButton = document.createElement('button');
            archiveButton.classList.add('archive-button');
            archiveButton.innerHTML = '<i class="fas fa-archive"></i> Arsipkan';
            archiveButton.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('archive-note', { detail: { noteId: data.id } })); 
            });
            this.buttonContainer.appendChild(archiveButton);

            const editButton = document.createElement('button');
            editButton.classList.add('edit-button');
            editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
            editButton.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('edit-note', { detail: { noteId: data.id } })); 
            });
            this.buttonContainer.appendChild(editButton);
        }

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i> Hapus';
        deleteButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('delete-note', { detail: { noteId: data.id } })); 
        });
        this.buttonContainer.appendChild(deleteButton);
    }
}
customElements.define('note-card', NoteCard); 

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .app-bar {
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            background-color: #3498db; 
            color: white; 
            padding: 10px 20px;
            border-radius: 8px;
        }
    
        .app-bar h1 {
          margin: 0; 
          font-size: 1.5em; 
        }
    
        .theme-switch {
          cursor: pointer;
          font-size: 1.5em; 
          transition: color 0.3s; 
        }
    
        .theme-switch i {
          transition: transform 0.3s ease;
        }
    
        .theme-switch:hover i {
          transform: scale(1.1); 
        }
      </style>
      <div class="app-bar">
        <h1>Catatan Saya</h1>
        <div class="theme-switch" id="theme-toggle">
            <i class="fas fa-sun"></i>
        </div>
      </div>
    `;
    
    this.themeToggle = this.shadowRoot.querySelector('#theme-toggle'); 
    this.themeToggle.addEventListener('click', this.toggleTheme.bind(this)); 
  }

  toggleTheme() {
    const event = new CustomEvent('theme-toggle'); 
    this.dispatchEvent(event);
  }
}
customElements.define('app-bar', AppBar);

class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style> 
        input[type="text"] {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px; 
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box; 
        }
      </style>
      <input type="text" id="search-input" placeholder="Cari Catatan">
    `; 

    this.searchInput = this.shadowRoot.querySelector('#search-input');
    this.searchInput.addEventListener('input', () => { 
        const searchTerm = this.searchInput.value;
        this.dispatchEvent(new CustomEvent('search-notes', { detail: { searchTerm: searchTerm } }));
    });
  } 
}
customElements.define('search-form', SearchForm);


document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const appBar = document.querySelector('app-bar');
    const noteTitleInput = document.getElementById('note-title');
    const noteBodyInput = document.getElementById('note-body');
    const addNoteButton = document.getElementById('add-note');
    const searchForm = document.querySelector('search-form'); 
    const notesGrid = document.querySelector('.notes-grid');
    const archiveGrid = document.querySelector('.archive-grid');

    let notes = JSON.parse(localStorage.getItem('notes')) || notesData;
    let archivedNotes = JSON.parse(localStorage.getItem('archivedNotes')) || [];

    displayNotes(); 
    displayArchivedNotes();

    addNoteButton.addEventListener('click', () => { 
        addNewNote(); 
    });

    appBar.addEventListener('theme-toggle', () => {
        toggleTheme(); 
    });

    searchForm.addEventListener('search-notes', (event) => { 
        const searchTerm = event.detail.searchTerm.toLowerCase(); 
        filterAndDisplayNotes(searchTerm);
    });

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        container.classList.toggle('dark-mode');

        const icon = appBar.themeToggle.querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark'); 
        } else {
            localStorage.setItem('theme', 'light'); 
        }
    }

    function addNewNote() {
        const title = noteTitleInput.value;
        const body = noteBodyInput.value;

        if (title.trim() !== '' && body.trim() !== '') {
            const newNote = {
                id: Date.now().toString(),
                title: title,
                body: body,
                createdAt: new Date().toLocaleString(),
                archived: false
            };
    
            notes.push(newNote);
            localStorage.setItem('notes', JSON.stringify(notes));
    
            noteTitleInput.value = ''; 
            noteBodyInput.value = ''; 
            displayNotes();
        } else {
            alert('Mohon isi judul dan isi catatan!');
        }
    }
  

    function displayNotes(filteredNotes = notes) { 
        notesGrid.innerHTML = ''; 
        filteredNotes.forEach(note => { 
            const noteElement = document.createElement('note-card');
            noteElement.note = note; 
            noteElement.addEventListener('archive-note', (event) => { 
                archiveNote(event.detail.noteId);
            });
            noteElement.addEventListener('edit-note', (event) => { 
                editNote(event.detail.noteId);
            });
            noteElement.addEventListener('delete-note', (event) => { 
                deleteNote(event.detail.noteId);
            });
            notesGrid.appendChild(noteElement);
        });
    }

    function displayArchivedNotes(filteredArchivedNotes = archivedNotes) { 
        archiveGrid.innerHTML = '';
    
        filteredArchivedNotes.forEach(note => {
          const noteElement = document.createElement('note-card'); 
          noteElement.note = note;
    
          
          noteElement.addEventListener('delete-note', (event) => { 
            deleteArchivedNote(event.detail.noteId);
          });
    
          archiveGrid.appendChild(noteElement); 
        });
      }
      
      
      function archiveNote(noteId) {
        const noteIndex = notes.findIndex(note => note.id === noteId);
    
        if (noteIndex !== -1) {
          const note = notes[noteIndex];
          archivedNotes.push(note); 
          notes.splice(noteIndex, 1); 
          localStorage.setItem('notes', JSON.stringify(notes)); 
          localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes)); 
          displayNotes(); 
          displayArchivedNotes(); 
        }
      }
    

      function editNote(noteId) {
        const note = notes.find(note => note.id === noteId);
    
        if (note) { 
            noteTitleInput.value = note.title;
            noteBodyInput.value = note.body;
            addNoteButton.textContent = 'Simpan Perubahan'; 
    
            addNoteButton.removeEventListener('click', addNewNote);
            addNoteButton.addEventListener('click', () => { 
                saveNoteChanges(note.id); 
            });
        }
      }
    
      function saveNoteChanges(noteId) {
        const noteIndex = notes.findIndex(note => note.id === noteId); 
    
        if (noteIndex !== -1) {
          notes[noteIndex].title = noteTitleInput.value; 
          notes[noteIndex].body = noteBodyInput.value;
          localStorage.setItem('notes', JSON.stringify(notes)); 
    
          addNoteButton.textContent = 'Tambah Catatan';
          addNoteButton.removeEventListener('click', saveNoteChanges); 
          addNoteButton.addEventListener('click', addNewNote);
    
          noteTitleInput.value = '';
          noteBodyInput.value = '';
          displayNotes();
        }
      }
      

      function deleteNote(noteId) {
        const noteIndex = notes.findIndex(note => note.id === noteId); 
        if (noteIndex !== -1) {
            notes.splice(noteIndex, 1);
            localStorage.setItem('notes', JSON.stringify(notes)); 
            displayNotes(); 
        }
    }
    
    function deleteArchivedNote(noteId) {
        const noteIndex = archivedNotes.findIndex(note => note.id === noteId);
        if (noteIndex !== -1) {
            archivedNotes.splice(noteIndex, 1); 
            localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes)); 
            displayArchivedNotes(); 
        }
    }


    function filterAndDisplayNotes(searchTerm) {
        const filteredNotes = notes.filter(note => {
            return note.title.toLowerCase().includes(searchTerm) || note.body.toLowerCase().includes(searchTerm);
        });
        const filteredArchivedNotes = archivedNotes.filter(note => {
            return note.title.toLowerCase().includes(searchTerm) || note.body.toLowerCase().includes(searchTerm);
        });

        displayNotes(filteredNotes);
        displayArchivedNotes(filteredArchivedNotes);
    }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    container.classList.add('dark-mode');
    const icon = appBar.shadowRoot.querySelector('.theme-switch i'); 
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }

}); 