import { IAction, INote } from '../../interfaces';
import { notesConstants } from '../constants';

export const addNote = (note: INote): IAction<string, INote> => ({
  type: notesConstants.ADD_NOTE,
  payload: note
});

export const updateNote = (note: INote): IAction<string, INote> => ({
  type: notesConstants.UPDATE_NOTE,
  payload: note
});

export const deleteNote = (id: number): IAction<string, number> => ({
  type: notesConstants.DELETE_NOTE,
  payload: id
});
