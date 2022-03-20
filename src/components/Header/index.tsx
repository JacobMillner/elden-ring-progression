import { HeaderProps } from './types';

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
      <div className="mb-2 ml-4">
        Elden Ring Progress guide and checklist based on the{' '}
        <a
          href="https://eldenring.wiki.fextralife.com/Game+Progress+Route"
          target="_blank"
          rel="noreferrer"
        >
          Elden Ring Wiki Game Progress Route
        </a>
        . -{' '}
        <a
          href="https://github.com/JacobMillner/elden-ring-progression"
          target="_blank"
          rel="noreferrer"
        >
          Github Repo
        </a>{' '}
        -
        <a href="https://jacobmillner.dev/" target="_blank" rel="noreferrer">
          jacobmillner.dev
        </a>
      </div>
    </>
  );
};

export default Header;
