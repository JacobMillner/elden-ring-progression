import { ChangeEvent } from 'react';
import { PageCategory } from 'pageConfig/page/types';

export interface TaskCategoriesProps {
  pageCategories: PageCategory[];
  checkData: Map<string, boolean>;
  toggleCheckbox: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
}
