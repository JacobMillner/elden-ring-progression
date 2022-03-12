import TaskCategory from 'components/TaskCategory';
import { PageCategory } from 'pageConfig/page/types';
import { TaskCategoriesProps } from './types';

const TaskCategories = (props: TaskCategoriesProps) => {
  const { pageCategories } = props;

  return (
    <>
      {pageCategories?.map((cat: PageCategory) => {
        return <TaskCategory title={cat.title} tasks={cat.tasks} />;
      })}
    </>
  );
};

export default TaskCategories;
