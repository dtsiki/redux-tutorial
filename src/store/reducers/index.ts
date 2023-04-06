import { NoteVariant } from '../../enums';
import { IAction, INote, IPayload } from '../../interfaces';
import { notesConstants } from '../constants';

const initialState = [
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
  },
  {
    id: 4,
    text: 'Pascal\'s triangle is a triangle that always starts with a 1 at the top and has 1\'s on the left and right edges',
    variant: NoteVariant.WHITE_VIOLET
  },
  {
    id: 5,
    text: 'SOLID, DRY, KISS, YAGNI, BDUF, APO',
    variant: NoteVariant.GREY
  },
  {
    id: 6,
    text: 'Code: The Hidden Language of Computer Hardware and Software by Charles Petzold',
    variant: NoteVariant.VIOLET
  },
  {
    id: 7,
    text: 'Chapter 7: In the Name of Honor',
    variant: NoteVariant.BLACK
  }
];

const notesReducer = (state = initialState, action: IAction<string, IPayload>): any => {
  switch (action.type) {
    case notesConstants.ADD_NOTE:
      return [...state, action.payload];

    case notesConstants.DELETE_NOTE:
      return [...state.filter((note) => note.id !== action.payload)];

    case notesConstants.UPDATE_NOTE:
      return [
        ...state.map((note) => {
          const payload = action.payload as INote;

          if (note.id === payload.id) {
            return {
              ...note,
              text: payload.text,
              variant: payload.variant
            };
          } else {
            return note;
          }
        })
      ];

    default:
      return state;
  }
};

export default notesReducer;
