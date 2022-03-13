import ProgressRow from 'components/ProgressRow';
import taskHash from 'pageConfig/tasks';
import { Task } from 'pageConfig/tasks/types';
import { TaskCategoryProps } from './types';

const TaskCategory = (props: TaskCategoryProps) => {
  const { title, tasks, checkData, toggleCheckbox } = props;
  const tasksData: (Task | undefined)[] = tasks.map((task) =>
    taskHash.get(task)
  );
  return (
    <>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne5">
          <button
            className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne5"
            aria-expanded="true"
            aria-controls="collapseOne5"
          >
            {title}
          </button>
        </h2>
        <div
          id="collapseOne5"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne5"
        >
          <div className="accordion-body py-4 px-5">
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Done</th>
                  <th>Task</th>
                  <th>Wiki</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {tasksData?.map((task: Task | undefined) => {
                  return (
                    <>
                      {task && (
                        <ProgressRow
                          id={task.id}
                          title={task.title}
                          image={task.image}
                          link={task.link}
                          checked={!!checkData.has(task.id)}
                          toggleCheckbox={toggleCheckbox}
                        />
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCategory;
