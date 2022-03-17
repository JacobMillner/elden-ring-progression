export interface ProgressRowProps {
  id: string;
  title: string;
  image?: string;
  link?: string;
  longDesc?: string;
  checkedData: Map<string, boolean>;
  toggleCheckbox: (checked: boolean, id: string) => void;
}
