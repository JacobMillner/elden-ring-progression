import { ChangeEvent, useEffect, useRef, useState } from 'react';
import TaskCategories from 'components/TaskCategories';
import { progression } from 'pageConfig/page';
import cloneDeep from 'lodash.clonedeep';
import debounce from 'lodash.debounce';
import Header from 'components/Header';

const initialCheckData = new Map<string, boolean>();

const TaskCategoriesContainer = () => {
  const [checkData, setCheckData] =
    useState<Map<string, boolean>>(initialCheckData);
  const [dataToSave, setDataToSave] = useState();
  const [isDirty, setIsDirty] = useState<boolean>();

  useEffect(() => {
    // TODO: set loaded check data
  }, []);

  useEffect(() => {
    // TODO: save check data
  }, [dataToSave]);

  const debouncedSave = useRef(
    debounce((data) => {
      setDataToSave(data);
      setIsDirty(false);
    }, 2000)
  ).current;

  const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const newCheckData = cloneDeep(checkData);
    newCheckData.set(id, e.target.checked);
    setCheckData(newCheckData);
    setIsDirty(true);
    debouncedSave(newCheckData);
  };

  return (
    <>
      <Header isDirty={isDirty} />
      <TaskCategories
        pageCategories={progression}
        checkData={checkData}
        toggleCheckbox={toggleCheckbox}
      />
    </>
  );
};

export default TaskCategoriesContainer;
