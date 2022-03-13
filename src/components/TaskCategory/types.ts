import { ChangeEvent } from 'react';

export interface TaskCategoryProps {
  title: string;
  tasks: string[];
  checkData: Map<string, boolean>;
  toggleCheckbox: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}
