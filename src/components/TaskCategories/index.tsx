import TaskCategory from 'components/TaskCategory';
import { TaskCategoriesProps } from './types';

const TaskCategories = (props: TaskCategoriesProps) => {
  const { pageCategories } = props;

  return (
    <>
      {pageCategories?.map((cat) => {
        return <TaskCategory title="test" tasks={[]} />;
      })}
    </>
  );
};

export default TaskCategories;
