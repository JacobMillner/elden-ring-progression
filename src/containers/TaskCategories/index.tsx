import { ChangeEvent, useEffect, useState } from 'react';
import TaskCategories from 'components/TaskCategories';
import { progression } from 'pageConfig/page';
import cloneDeep from 'lodash.clonedeep';

const initialCheckData = new Map<string, boolean>();

const TaskCategoriesContainer = () => {
  const [checkData, setCheckData] =
    useState<Map<string, boolean>>(initialCheckData);

  const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const newCheckData = cloneDeep(checkData);
    newCheckData.set(id, e.target.checked);
    setCheckData(newCheckData);
  };

  useEffect(() => {
    // TODO: set loaded check data
  }, []);
  return (
    <TaskCategories
      pageCategories={progression}
      checkData={checkData}
      toggleCheckbox={toggleCheckbox}
    />
  );
};

export default TaskCategoriesContainer;
