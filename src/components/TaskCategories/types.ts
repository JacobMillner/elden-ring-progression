import { PageCategory } from 'pageConfig/page/types';

export interface TaskCategoriesProps {
  pageCategories: PageCategory[];
  checkData: Map<string, boolean>;
  toggleCheckbox: (checked: boolean, id: string) => void;
}
