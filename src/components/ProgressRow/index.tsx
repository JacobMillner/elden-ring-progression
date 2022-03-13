import { useEffect, useState } from 'react';
import { ProgressRowProps } from './types';

const ProgressRow = (props: ProgressRowProps) => {
  const { id, title, checkedData, image, link, toggleCheckbox } = props;
  const [checked, setChecked] = useState<boolean>();
  useEffect(() => {
    if (checked !== checkedData.get(id)) {
      setChecked(checkedData.get(id));
    }
  }, [checkedData, checked, id]);
  return (
    <tr
      id={id}
      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
    >
      <td
        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:cursor-pointer"
        onClick={() => {
          toggleCheckbox(!checked, id);
        }}
      >
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          checked={checked}
          id={id}
        />
      </td>
      <td
        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:cursor-pointer"
        onClick={() => {
          toggleCheckbox(!checked, id);
        }}
      >
        {title}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div className="flex flex-wrap justify-center">
          <a href={image} target="_blank" rel="noreferrer">
            <img
              src={image}
              className="object-scale-down h-20 w-20 p-1 bg-white border rounded shadow-lg max-w-sm hover:bg-grey-600 transition duration-500 hover:scale-150"
              alt={title}
            />
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ProgressRow;