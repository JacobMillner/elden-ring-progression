import TaskCategories from 'components/TaskCategories';
import { progression } from 'pageConfig/page';

const TaskCategoriesContainer = () => {
  return <TaskCategories pageCategories={progression} />;
};

export default TaskCategoriesContainer;
