import { atom } from 'recoil';

export const todoTitleFormState = atom<string>({
  key: 'todoTileForm',
  default: '',
});
