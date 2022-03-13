import TaskCategoriesContainer from 'containers/TaskCategories';

export default function Home() {
  return (
    <>
      <div className="mb-10 p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <main>
          <h2 className="font-semibold text-3xl mb-5">
            Elden Ring Progression Guide and Tracker ✅
          </h2>
        </main>
      </div>

      <div className="accordion" id="accordionExample5">
        <TaskCategoriesContainer />
      </div>
    </>
  );
}
