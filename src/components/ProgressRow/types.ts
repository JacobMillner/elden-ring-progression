import { ChangeEvent } from 'react';

export interface ProgressRowProps {
  id: string;
  title: string;
  checked: boolean;
  image?: string;
  link?: string;
  toggleCheckbox: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}
