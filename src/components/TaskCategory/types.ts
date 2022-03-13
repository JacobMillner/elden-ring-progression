export interface TaskCategoryProps {
  title: string;
  subtitle?: string;
  tasks: string[];
  checkData: Map<string, boolean>;
  toggleCheckbox: (checked: boolean, id: string) => void;
}
