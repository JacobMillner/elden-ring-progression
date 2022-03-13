import TaskCategory from 'components/TaskCategory';
import { PageCategory } from 'pageConfig/page/types';
import { TaskCategoriesProps } from './types';

const TaskCategories = (props: TaskCategoriesProps) => {
  const { pageCategories, checkData, toggleCheckbox } = props;

  return (
    <>
      {pageCategories?.map((cat: PageCategory) => {
        return (
          <div className="accordion" id="accordionExample5">
            <TaskCategory
              title={cat.title}
              tasks={cat.tasks}
              key={cat.title}
              checkData={checkData}
              toggleCheckbox={toggleCheckbox}
            />
          </div>
        );
      })}
    </>
  );
};

export default TaskCategories;
