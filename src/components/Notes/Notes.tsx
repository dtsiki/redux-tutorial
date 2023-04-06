import React from 'react';

import { useAppSelector } from '../../store/hooks';
import { INote } from '../../interfaces';
import Note from '../Note/Note';

const Notes = (): React.ReactElement => {
  const notes = useAppSelector((state) => state.notes);

  if (!notes.length) {
    return <div className='notification'>Oops, there are no notes yet</div>;
  }

  return (
    <ul className='row notes'>
      {notes.map((note: INote) => (
        <li
          key={note.id}
          className='col col--33 col--mobile-100 col--tablet-100'>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
};

export default Notes;
