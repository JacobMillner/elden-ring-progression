import { ChangeEvent, useEffect, useRef, useState } from 'react';
import TaskCategories from 'components/TaskCategories';
import { progression } from 'pageConfig/page';
import cloneDeep from 'lodash.clonedeep';
import debounce from 'lodash.debounce';
import Header from 'components/Header';
import useLocalStorage from 'hooks/useLocalstorage';
import { jsonToMap, mapToJson } from 'utils/map';
import { Task } from 'pageConfig/tasks/types';

const initialCheckData = new Map<string, boolean>();

const TaskCategoriesContainer = () => {
  const [checkData, setCheckData] =
    useState<Map<string, boolean>>(initialCheckData);
  const [dataToSave, setDataToSave] = useState<Map<string, boolean>>();
  const [isDirty, setIsDirty] = useState<boolean>();
  const [savedCheckData, setSavedCheckData] = useLocalStorage(
    'savedCheckData',
    ''
  );

  useEffect(() => {
    // onload, check localStorage and set checked
    if (savedCheckData) {
      const loadedDataMap = jsonToMap(savedCheckData) as Map<string, boolean>;
      if (loadedDataMap) setCheckData(loadedDataMap);
    }
  }, []);

  useEffect(() => {
    if (dataToSave) {
      setSavedCheckData(mapToJson(dataToSave));
    }
  }, [dataToSave]);

  const debouncedSave = useRef(
    debounce((data) => {
      setDataToSave(data);
      setIsDirty(false);
    }, 2000)
  ).current;

  const toggleCheckbox = (checked: boolean, id: string) => {
    const newCheckData = cloneDeep(checkData);
    newCheckData.set(id, checked);
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
