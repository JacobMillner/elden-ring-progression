import ProgressRow from 'components/ProgressRow';

export default function Home() {
  return (
    <>
      <div className="mb-10 p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <main>
          <h2 className="font-semibold text-3xl mb-5">
            Elden Ring Progression Guide and Tracker
          </h2>
        </main>
      </div>

      <div className="accordion" id="accordionExample5">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne5">
            <button
              className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne5"
              aria-expanded="true"
              aria-controls="collapseOne5"
            >
              West Limegrave  
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
                    <th>Link</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <ProgressRow
                    checked={false}
                    id="1"
                    title="lets do the thing"
                    image="image/src.jpg"
                    link="google.com"
                  />
                  <ProgressRow
                    checked={false}
                    id="1"
                    title="lets do the thing"
                    image="image/src.jpg"
                    link="google.com"
                  />
                  <ProgressRow
                    checked={false}
                    id="1"
                    title="lets do the thing"
                    image="image/src.jpg"
                    link="google.com"
                  />
                  <ProgressRow
                    checked={false}
                    id="1"
                    title="lets do the thing"
                    image="image/src.jpg"
                    link="google.com"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
