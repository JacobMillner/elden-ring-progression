export interface TaskCategoryProps {
  title: string;
  tasks: string[];
  checkData: Map<string, boolean>;
  toggleCheckbox: (checked: boolean, id: string) => void;
}
