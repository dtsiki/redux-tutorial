import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { INote } from '../../interfaces';
import { useAppDispatch } from '../../store/hooks';
import { deleteNote, updateNote } from '../../store/actions';
import ColorPicker from '../ColorPicker';
import { NoteVariant } from '../../enums';

interface NoteProps {
  note: INote;
}

const Note = ({ note }: NoteProps): React.ReactElement => {
  const { id, text, variant } = note;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [localText, setLocalText] = useState<string>(text);
  const [selectedVariant, setSelectedVariant] = useState<NoteVariant>(variant);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, isEditing]);

  const onDeleteClicked = (): void => {
    dispatch(deleteNote(id));
  };

  const onUpdateClicked = (): void => {
    dispatch(
      updateNote({
        id,
        variant: selectedVariant,
        text: localText
      })
    );

    setIsEditing(false);
    setLocalText(text);
  };

  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setLocalText(e.target.value);
  };

  const moveCaretAtEnd = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const temp = e.target.value;

    e.target.value = '';
    e.target.value = temp;
  };

  const changeVariant = (variant: NoteVariant): void => {
    setSelectedVariant(variant);
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
        <div className='form edit-note'>
          <textarea
            className='form__input'
            value={localText}
            onChange={changeText}
            rows={4}
            ref={inputRef}
            onFocus={moveCaretAtEnd}
          />
          <ColorPicker
            currentVariant={selectedVariant}
            handleVariant={changeVariant}
          />
          <div className='form__footer'>
            <button
              className='form__action'
              onClick={() => setIsEditing(false)}>
              Cancel
            </button>
            <button
              className='form__action'
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
