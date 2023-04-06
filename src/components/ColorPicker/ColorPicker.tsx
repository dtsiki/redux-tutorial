import React from 'react';

import { NoteVariant } from '../../enums';

interface ColorPickerProps {
  currentVariant: NoteVariant;
  handleVariant: (variant: NoteVariant) => void;
}

const ColorPicker = ({ currentVariant, handleVariant }: ColorPickerProps): React.ReactElement => {
  const onSelectColor = (variant: NoteVariant): void => {
    handleVariant(variant);
  };

  return (
    <ul className='color-picker'>
      {Object.values(NoteVariant)
        .map((variant: NoteVariant) => {
          return (
            <li
              key={variant}
              className='color-picker__item'>
              <button
                className={`color-picker__color ${variant} ${currentVariant === variant ? 'selected' : ''}`}
                onClick={() => onSelectColor(variant)}>
                <span className='visually-hidden'>{variant}</span>
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ColorPicker;
