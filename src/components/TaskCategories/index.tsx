import TaskCategory from 'components/TaskCategory';
import { PageCategory } from 'pageConfig/page/types';
import { TaskCategoriesProps } from './types';

const TaskCategories = (props: TaskCategoriesProps) => {
  const { pageCategories, checkData, toggleCheckbox } = props;

  return (
    <>
      {pageCategories?.map((cat: PageCategory) => {
        return (
          <div
            className="accordion"
            id={`acc-id-${cat.title}`}
            key={`acc-${cat.title}`}
          >
            <TaskCategory
              title={cat.title}
              subtitle={cat.subtitle}
              tasks={cat.tasks}
              key={`cat-${cat.title}`}
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
