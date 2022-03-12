import ProgressRow from 'components/ProgressRow';

export default function Home() {
  return (
    <>
      <div className="p-6 shadow-lg rounded-lg bg-gray-100 text-gray-700">
        <main>
          <h2 class="font-semibold text-3xl mb-5">
            Elden Ring Progression Guide and Tracker
          </h2>
        </main>
      </div>
      <h1>Test Table</h1>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Complete</th>
            <th>Name</th>
            <th>Link</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <ProgressRow />
        </tbody>
      </table>
    </>
  );
}
