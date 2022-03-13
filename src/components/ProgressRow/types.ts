import { ChangeEvent } from 'react';

export interface ProgressRowProps {
  id: string;
  title: string;
  image?: string;
  link?: string;
  checkedData: Map<string, boolean>;
  toggleCheckbox: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}
