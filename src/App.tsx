import React, { useEffect, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NoteVariant } from './enums';
import { addNote } from './store/actions';
import { useAppDispatch } from './store/hooks';
import Notes from './components/Notes';
import ColorPicker from './components/ColorPicker';

const App: React.FC = () => {
  const [isAddingNew, setIsAddingNew] = useState<boolean>(false);
  const [selectedVariant, setSelectedVariant] = useState<NoteVariant>(NoteVariant.VIOLET);
  const [localText, setLocalText] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAddingNew) {
      document.body.classList.add('not-scroll');
    } else {
      document.body.classList.remove('not-scroll');
    }
  }, [isAddingNew]);

  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setLocalText(e.target.value);
  };

  const onAddClicked = (): void => {
    dispatch(
      addNote({
        id: Date.now(),
        text: localText,
        variant: selectedVariant
      })
    );

    setLocalText('');
    setIsAddingNew(false);
  };

  const changeVariant = (variant: NoteVariant): void => {
    setSelectedVariant(variant);
  };

  return (
    <div className='layout'>
      <div className='container'>
        <h1 className='title'>Notes</h1>
        <Notes />
        <div className={`form new-note ${isAddingNew ? 'visible' : ''}`}>
          <textarea
            className='form__input'
            value={localText}
            onChange={changeText}
            rows={4}
          />
          <ColorPicker
            currentVariant={selectedVariant}
            handleVariant={changeVariant}
          />
          <div className='form__footer'>
            <button
              className='form__action'
              onClick={() => setIsAddingNew(false)}>
              Cancel
            </button>
            <button
              className='form__action'
              onClick={onAddClicked}>
              Add
            </button>
          </div>
        </div>
        <div className={`nav ${isAddingNew ? 'opened' : ''}`}>
          <button
            className={`nav__action ${isAddingNew ? 'close' : 'open'}`}
            onClick={() => setIsAddingNew(!isAddingNew)}>
            <span className='visually-hidden'>{isAddingNew ? 'Add new note' : 'Close'}</span>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
