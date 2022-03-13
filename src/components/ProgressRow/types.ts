export interface ProgressRowProps {
  id: string;
  title: string;
  image?: string;
  link?: string;
  checkedData: Map<string, boolean>;
  toggleCheckbox: (checked: boolean, id: string) => void;
}
