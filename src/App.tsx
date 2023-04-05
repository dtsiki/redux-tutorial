import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Note from './components/Note';
import { NoteVariant } from './enums';

const App: React.FC = () => {
  const notes = [
    {
      id: 1,
      text: 'It\'s leviOsa, not levioSA!',
      variant: NoteVariant.BLACK
    },
    {
      id: 2,
      text: 'The Hitchhiker\'s Guide to the Galaxy by Douglas Adams',
      variant: NoteVariant.WHITE
    },
    {
      id: 3,
      text: 'Buy milk',
      variant: NoteVariant.VIOLET
    }
  ];

  const onAddClicked = (): void => {
    // add new note
  };

  return (
    <div className='layout'>
      <div className='container'>
        <h1 className='title'>Notes</h1>
        <ul className='row'>
          {notes.map((note) => (
            <li
              key={note.id}
              className='col col--33 col--mobile-100 col--tablet-100'>
              <Note note={note} />
            </li>
          ))}
        </ul>
        <div className='nav'>
          <button
            className='nav__action'
            onClick={onAddClicked}>
            <span className='visually-hidden'>Add new note</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
