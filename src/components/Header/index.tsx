import { HeaderProps } from './styles';

const Header = (props: HeaderProps) => {
  const { isDirty } = props;
  const saveIndicator = isDirty ? '⚠️' : '✅';
  return (
    <>
      <div className="mb-10 p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <main>
          <h2 className="font-semibold text-3xl mb-5">
            Elden Ring Progression Guide and Tracker {saveIndicator}
          </h2>
        </main>
      </div>
    </>
  );
};

export default Header;
