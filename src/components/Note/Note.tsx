import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { INote } from '../../interfaces';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface NoteProps {
  note: INote;
}

const Note = ({ note }: NoteProps): ReactElement => {
  const { id, text, variant } = note;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localText, setLocalText] = useState<string>(text);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, isEditing]);

  const onDeleteClicked = (): void => {
    // delete note by id
  };

  const onUpdateClicked = (): void => {
    // update note
  };

  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setLocalText(e.target.value);
  };

  const moveCaretAtEnd = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const temp = e.target.value;

    e.target.value = '';
    e.target.value = temp;
  };

  return (
    <div className={`note ${variant}`}>
      {!isEditing && (
        <button
          className='note__action'
          onClick={onDeleteClicked}>
          <span className='visually-hidden'>Delete note ${text}</span>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      {isEditing ? (
        <div className='note__form edit-form'>
          <textarea
            className='edit-form__input'
            value={localText}
            onChange={changeText}
            rows={4}
            ref={inputRef}
            onFocus={moveCaretAtEnd}
          />
          <div className='edit-form__footer'>
            <button
              className='edit-form__action'
              onClick={() => setIsEditing(false)}>
              Cancel
            </button>
            <button
              className='edit-form__action'
              onClick={onUpdateClicked}>
              Update
            </button>
          </div>
        </div>
      ) : (
        <button
          className='note__toggle'
          onClick={() => setIsEditing(true)}>
          {text}
        </button>
      )}
    </div>
  );
};

export default Note;
