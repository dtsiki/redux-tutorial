import { NoteVariant } from '../enums';

export interface INote {
  id: number;
  text: string;
  variant: NoteVariant;
}
